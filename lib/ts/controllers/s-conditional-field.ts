import { StacksController } from "../stacks";
import { assumeType } from "../utilities/helpers";

type Operator = '==' | '!=' | 'checked';
type FormFieldElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;

const SupportedTags = ['input', 'select', 'textarea'];

export class ConditionalField extends StacksController {
    declare targetIdValue: string;
    declare operatorValue: Operator;
    declare expectedValue: string;

    static values = {
        targetId: String,
        operator: String,
        expected: String,
    };

    private formField: FormFieldElement | FormFieldElement[] | null = null;

    connect() {
        const targetEl = document.getElementById(this.targetIdValue);

        if (targetEl === null) {
            throw new Error(`No element with ID ${this.targetIdValue} found.`);
        }

        if (!SupportedTags.includes(targetEl.tagName.toLowerCase())) {
            throw new Error(`A ConditionalField controller can only target ${SupportedTags.join(', ')} tags; got ${targetEl.tagName}`);
        }

        assumeType<FormFieldElement>(targetEl);

        // If we have a set of radio buttons, they will change automatically
        // whenever a different radio is selected but the radios that were
        // unselected do not fire a "change" event. So we should watch all radios
        // named the same way so that we can watch for changes.
        if (targetEl.type === 'radio') {
            this.formField = Array.from(document.querySelectorAll(`input[type="radio"][name="${targetEl.name}"]`));

            for (const formFieldElement of this.formField) {
                formFieldElement.addEventListener('change', this.handleChangeEvent);
            }
        } else {
            this.formField = targetEl;
            this.formField.addEventListener('change', this.handleChangeEvent);
        }
    }

    disconnect() {
        if (Array.isArray(this.formField)) {
            for (const formFieldElement of this.formField) {
                formFieldElement.removeEventListener('change', this.handleChangeEvent);
            }
        } else {
            this.formField?.removeEventListener('change', this.handleChangeEvent);
        }
    }

    private handleChangeEvent = (event: Event) => {
        if (event.currentTarget === null) {
            return;
        }

        // currentTarget has a type of `EventTarget`, which only has event listener
        // methods defined in the interface.
        assumeType<FormFieldElement>(event.currentTarget);

        const value = this.getValueFromFormField(event.currentTarget);
        const shouldShow = this.doesMatch(value, this.operatorValue, this.expectedValue);

        if (shouldShow) {
            this.element.classList.remove('d-none');
        } else {
            this.element.classList.add('d-none');
        }
    }

    private getValueFromFormField(field: FormFieldElement): boolean | string {
        switch (field.tagName.toLowerCase()) {
            case 'input':
                assumeType<HTMLInputElement>(field);

                if (field.type === 'checkbox') {
                    return field.checked;
                }

                return field.value;

            case 'select':
            case 'textarea':
                return field.value;

            default:
                throw new Error(`Unsupported tag name: ${field.tagName}`);
        }
    }

    private doesMatch(expected: boolean | string, operator: Operator | string, rhs: string) {
        switch (operator) {
            case "==":
                return expected == rhs;

            case "!=":
                return expected != rhs;

            case "checked":
                return typeof expected === "boolean" && expected;

            default:
                throw new Error(`Unsupported operator: ${operator}`);
        }
    }
}
