<script lang="ts">
    type Size = 16 | 24;

    interface Props {
        size: Size;
    }

    const { size }: Props = $props();
</script>

<svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <rect
        x="1.44543"
        y="1.44543"
        width="45.1091"
        height="45.1091"
        stroke="#A8ABB0"
        stroke-width="2.89086"
        stroke-dasharray="5.78 5.78"
    />
    <rect x="10" y="14" width="12" height="3.12" fill="#46484D" />
    <rect x="26" y="14" width="12" height="3.12" fill="#46484D" />
    <rect x="14" y="31.12" width="20" height="3.12" fill="#46484D" />
</svg>
