import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import { IconServiceMicrosoftTeams } from "@stackoverflow/stacks-icons/icons";

import Icon from "./Icon.svelte";

describe("Icon", () => {
    it("should render the element passed in the src prop", async () => {
        render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon"></svg>`,
        });
        expect(screen.getByTestId("icon")).to.be.visible;
    });

    it("should add the 'native' class to the svg element when native is set to true", async () => {
        render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon"></svg>`,
            native: true,
        });
        expect(screen.getByTestId("icon")).to.have.class("native");
    });

    it("should remove the aria-hidden property and add a title tag when the title prop is provided", async () => {
        render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon" aria-hidden="true"></svg>`,
            title: "My title",
        });
        expect(screen.getByTestId("icon")).not.to.have.attribute("aria-hidden");
        expect(screen.getByTestId("icon")).to.have.descendant("title");
        expect(screen.getByTestId("icon").querySelector("title")).to.have.text(
            "My title"
        );
    });

    it("should proxies any additional class to the svg element", async () => {
        render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon"></svg>`,
            class: "additional-class",
        });
        expect(screen.getByTestId("icon")).to.have.class("additional-class");
    });

    it("should adjust the svg content on prop updates", async () => {
        const component = render(Icon, {
            src: `<svg data-testId="icon" class="svg-icon"></svg>`,
            class: "additional-class",
        });

        component.rerender({ class: "updated-class" });

        await tick();

        expect(screen.getByTestId("icon")).not.to.have.class(
            "additional-class"
        );
        expect(screen.getByTestId("icon")).to.have.class("updated-class");
    });

    for (const { quoteStyle, src, expectedGradientReference } of [
        {
            quoteStyle: "double quotes",
            src: `<svg data-testid="icon" class="svg-icon" aria-labelledby="icon-title">
                <defs>
                    <linearGradient id="paint"><stop stop-color="red" /></linearGradient>
                    <clipPath id="shape"><rect width="20" height="20" /></clipPath>
                </defs>
                <title id="icon-title">Sample icon</title>
                <path fill="url(#paint)" clip-path="url(#shape)" />
                <use href="#shape" />
            </svg>`,
            expectedGradientReference: (id: string) => `url(#${id})`,
        },
        {
            quoteStyle: "alternate quote styles",
            src: `<svg data-testid="icon" class="svg-icon" aria-labelledby='icon-title'>
                <defs>
                    <linearGradient id='paint'><stop stop-color="red" /></linearGradient>
                    <clipPath id="shape"><rect width="20" height="20" /></clipPath>
                </defs>
                <title id='icon-title'>Sample icon</title>
                <path fill="url('#paint')" clip-path="url(#shape)" />
                <use href='#shape' />
            </svg>`,
            expectedGradientReference: (id: string) => `url('#${id}')`,
        },
    ]) {
        it(`should keep SVG references within each icon instance using ${quoteStyle}`, () => {
            render(Icon, { src });
            render(Icon, { src });

            const icons = screen.getAllByTestId("icon");
            const gradientIds = icons.map(
                (icon) => icon.querySelector("linearGradient")!.id
            );
            expect(new Set(gradientIds).size).to.equal(icons.length);

            for (const icon of icons) {
                const gradientId = icon.querySelector("linearGradient")!.id;
                const clipPathId = icon.querySelector("clipPath")!.id;
                const path = icon.querySelector("path")!;

                expect(path.getAttribute("fill")).to.equal(
                    expectedGradientReference(gradientId)
                );
                expect(path.getAttribute("clip-path")).to.equal(
                    `url(#${clipPathId})`
                );
                expect(
                    icon.querySelector("use")?.getAttribute("href")
                ).to.equal(`#${clipPathId}`);
                expect(icon.getAttribute("aria-labelledby")).to.equal(
                    icon.querySelector("title")!.id
                );
            }
        });
    }

    it("should render repeated native-color icons with their own gradients", () => {
        const hidden = render(Icon, {
            src: IconServiceMicrosoftTeams,
            native: true,
        });
        hidden.container.style.display = "none";
        render(Icon, { src: IconServiceMicrosoftTeams, native: true });

        const icons = document.querySelectorAll(".IconServiceMicrosoftTeams");
        const resourceIds = [...icons].flatMap((icon) =>
            [...icon.querySelectorAll("defs [id]")].map(
                (resource) => resource.id
            )
        );

        expect(icons.length).to.equal(2);
        expect(resourceIds.length).to.be.greaterThan(0);
        expect(new Set(resourceIds).size).to.equal(resourceIds.length);

        for (const icon of icons) {
            const localIds = new Set(
                [...icon.querySelectorAll("defs [id]")].map(
                    (resource) => resource.id
                )
            );

            const paintedPaths = icon.querySelectorAll('[fill^="url("]');
            expect(paintedPaths.length).to.be.greaterThan(0);
            for (const path of paintedPaths) {
                const reference = path
                    .getAttribute("fill")
                    ?.match(/^url\(#([^)]+)\)$/);
                expect(reference).not.to.be.null;
                expect(localIds.has(reference![1])).to.be.true;
            }
        }
    });
});
