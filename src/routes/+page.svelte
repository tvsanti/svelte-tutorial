<script>
	import { tick } from 'svelte';
  
	let count = 1;
	$: double = count * 2;
  
	async function increment() {
	  count ++;
	  // double is still 2
  
	  await tick();
  
	  // double is now 4
	  console.log(double); 
	}
	increment()
  </script>