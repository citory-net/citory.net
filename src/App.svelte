<!-- svelte-ignore css_unused_selector -->
<!--[ Imports ]-->
<script>
    import icon from '$image/de_icon/favicon.png';

    import HEADER from '$layout/HEADER.svelte';
    import FOOTER from '$layout/FOOTER.svelte';

    import PAGELAYOUT from '$layout/FOOTER.svelte';

    import NEONTEXT from '$components/crap/NeonText.svelte';

    const title = "$ DeltaCion 🍷";
</script>

<!--[ Head ]-->
<svelte:head>
    <title>{title}</title>
    <link rel="icon" href={icon} type="image/x-icon">
    <meta name="description" content="Bruh">
</svelte:head>

<!--[ Style ]-->
<style lang="scss">
    @use "$styles/main_styles.scss" as *;
</style>

<!--[ Page start ]-->
<HEADER />
<!--[ Page start ]-->

<PAGELAYOUT />

<!--[ Page end ]-->
<FOOTER />
<!--[ Page end ]-->
