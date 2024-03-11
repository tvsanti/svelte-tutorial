<script>
    import NestedButton from "./NestedButton.svelte";
	let string = `this string contains some <strong>HTML!!!</strong>`;

    let src = '/favicon.png';
</script>

<h1>Hello Santiago</h1>
<p>{@html string}</p>
<img src={src} alt="imagen chingona" />
<NestedButton/>

<style>
    h1 {
        color: red;
        background-color: blue;
    }
</style>