<script lang="ts">
    export let count: number[];
    let sum: number = 0;
    function sumarrya() {
        count = [...count, count.length + 1]
        count.forEach(i => {
            sum += i
        })
        return sum
    }

    
</script>

<button on:click={sumarrya}>Clicked {sum}</button>
<p>{sum}</p>
<style>
    button {
        background-color: aqua;
    }
</style>