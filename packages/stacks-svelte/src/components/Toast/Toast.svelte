<script module lang="ts">
    import { toast, Toaster } from "svelte-sonner";
    import Notice from "../Notice/Notice.svelte";
    import NoticeAction from "../Notice/NoticeAction.svelte";
    import { createRawSnippet, mount, unmount, type Snippet } from "svelte";

    export type Variant =
        | ""
        | "danger"
        | "info"
        | "success"
        | "warning"
        | undefined;

    export type ToastOptions = {
        variant?: Variant;
        important?: boolean;
        icon?: string;
        iconTitle?: string;
        transient?: boolean;
        dismissible?: boolean;
        duration?: number;
        onUserClose?: () => void;
        onAutoClose?: () => void;
        onClose?: () => void;
        actions?: Snippet;
    };

    export function showToast(
        message: string | Snippet,
        options: ToastOptions = {}
    ) {
        const {
            variant,
            important,
            icon,
            iconTitle,
            duration = 10000,
            dismissible = true,
            transient = true,
            onAutoClose = () => {},
            onUserClose = () => {},
            onClose = () => {},
            actions,
        } = options;

        const messageSnip =
            typeof message === "string"
                ? createRawSnippet(() => ({
                      render: () => `<span>${message}</span>`,
                  }))
                : message;

        const closeSnip = createRawSnippet(() => ({
            render: () => "<span />",
            setup: (target) => {
                const comp = mount(NoticeAction, {
                    target,
                    props: {
                        type: "close",
                        onclick: () => {
                            toast.dismiss(toastId);
                            onUserClose();
                            onClose();
                        },
                    },
                });
                return () => unmount(comp);
            },
        }));

        const actionsSnip =
            actions || dismissible
                ? createRawSnippet(() => ({
                      render: () => "<span />",
                      setup: (target) => {
                          if (actions) {
                              // @ts-expect-error this is the only way I found to render a Snippet (in the context of a function)
                              actions(target);
                          }
                          if (dismissible) {
                              // @ts-expect-error this is the only way I found to render a Snippet (in the context of a function)
                              closeSnip(target);
                          }
                      },
                  }))
                : undefined;

        let role: string;
        if (variant === "danger") {
            role = "alert";
        } else if (actions) {
            role = "alertdialog";
        } else {
            role = "status";
        }

        const toastId = toast.custom(Notice, {
            componentProps: {
                icon,
                iconTitle,
                variant,
                important,
                role,
                children: messageSnip,
                actions: actionsSnip,
            },
            class: "wmn6 sm:wmn-initial",
            duration: !transient ? Number.POSITIVE_INFINITY : duration,
            onAutoClose: () => {
                onAutoClose();
                onClose();
            },
        });

        return toastId;
    }

    export function hideToast(toastId: string | number) {
        toast.dismiss(toastId);
    }
</script>

<Toaster
    position="top-center"
    class="wmn6 sm:wmn-initial"
    style="z-index: calc(var(--zi-modals) + 1); top: calc(var(--theme-topbar-height, calc(var(--su-static48) + var(--su-static8))) + var(--su-static16))"
/>
