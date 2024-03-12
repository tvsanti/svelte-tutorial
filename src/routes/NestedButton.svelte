<script>
    let count = 0;
    $: doubled = count * 2

    $: if (count >= 5) {
        alert(2)
    }
    function increment() {
        count += 1
    }
</script>

<button on:click={increment}>Clicked {count} {count === 1 ? "time" : "times"}</button>
<p>{count} doubled is {doubled}</p>
<style>
    button {
        background-color: aqua;
    }
</style>