<!--[ Imports ]-->
<script>
    import icon from '$image/de_icon/favicon.png';

    import HEADER from '$components/HEADER.svelte';
    import FOOTER from '$components/FOOTER.svelte';

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
    @use "./assets/styles/body.scss" as *;
</style>

<!--[ Page ]-->
<HEADER />

<p>lol</p>

<FOOTER />
