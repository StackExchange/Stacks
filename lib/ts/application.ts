import { Application, Definition, Schema } from "stimulus";

class StacksApplication extends Application {
    private initializing: boolean = true;

    load(...definitions: Definition[]): void
    load(definitions: Definition[]): void
    load(head: Definition | Definition[], ...rest: Definition[]) {
        const definitions = Array.isArray(head) ? head : [head, ...rest];

        for (const definition of definitions) {
            const hasPrefix = /^s-/.test(definition.identifier);
            if (this.initializing && !hasPrefix) {
                throw "Stacks-created Stimulus controller names must start with \"s-\".";
            }
            if (!this.initializing && hasPrefix) {
                throw "The \"s-\" prefix on Stimulus controller names is reserved for Stacks-created controllers.";
            }
        }

        super.load(definitions);
    }

    static start(element?: Element, schema?: Schema): StacksApplication {
        const application = new StacksApplication(element, schema);
        application.start().then(() => {});

        return application;
    }

    finalize(): void {
        this.initializing = false;
    }

    isInitialized(): boolean {
        return this.initializing;
    }
}

export const application = StacksApplication.start();
