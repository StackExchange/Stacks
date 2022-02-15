import { application } from './application';
import * as Stacks from './index';

declare global {
    interface Window {
        Stacks: any;
    }
}

window.Stacks = {
    application: application,
    _initializing: application.isInitialized(),
    ...Stacks,
};

export {}
