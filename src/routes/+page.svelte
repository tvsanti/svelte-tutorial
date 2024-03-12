<script lang="ts">
    import NestedButton from "./NestedButton.svelte";
	let htmltr = `this string contains some <strong>HTML!!!</strong>`;

    let imgStr: string = '/favicon.png';
</script>

<h1>Hello Santiago</h1>
<p>{@html htmltr}</p>
<img src={imgStr} alt="imagen chingona" />
<NestedButton count={[1,2,3,4]}/>

<style>
    h1 {
        color: red;
        background-color: blue;
    }
</style>