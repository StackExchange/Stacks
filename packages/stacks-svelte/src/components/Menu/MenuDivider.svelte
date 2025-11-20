<script lang="ts">
    interface Props {
        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    let { class: className = "" }: Props = $props();

    const getClasses = (className: string) => {
        const base = "s-menu--divider";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className));
</script>

<li class={classes} role="separator"></li>
