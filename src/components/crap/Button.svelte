<script>
    export let name = "Button"
    export let buttonID = "defButton"
    export let url = "#"
</script>

<style>
    a {
        text-decoration: none;
    }
</style>

<a href={url} target="_blank">
    <div class={buttonID}>
        {name}
    </div>
</a>