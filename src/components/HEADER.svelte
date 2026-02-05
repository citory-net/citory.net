<!--[ Imports ]-->
<script>
    import Hypercube from '$components/crap/Hypercube.svelte';
    import Button from '$components/crap/Button.svelte';

    import '$styles/body.scss'
</script>

<!--[ Style ]-->
<style lang="scss">
    @use "./assets/styles/variables.scss" as *;

    .header  {
        margin:     0vh;
        width:      100vh;
        height:     5vh;
        display:    inline-block;
        grid-row:   1;
        border-bottom: 5px, solid, $accent-color;
    }

    .cube_zone {
        width:          10%;
        height:         10%;
        margin-left:    0%;
        margin-top:     0%;
        padding:        0%;
    }

    .nav_zone {
    }
</style>

<!--[ Page ]-->
<div class="header">
    <div class="cube_zone">
        <Hypercube /></div>
    <div class="nav_zone">
        <Button name="def" buttonID="ugly" url="#"/>
    </div>
</div>