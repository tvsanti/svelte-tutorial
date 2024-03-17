<script>
    let yes = false;
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    let selected = colors[0];
  </script>
  
  <h1 style="color: {selected}">Pick a color</h1>
  <div>
      {#each colors as color}
          <button
              aria-current={selected === color}
              aria-label={color}
              style="background: {color}"
              on:click={() => selected = color}
          >{color}</button>
      {/each}
  </div>
  
  <label>
    <input type="checkbox" bind:checked={yes} />
    Yes! Send me regular email spam
  </label>
  {#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
  {:else}
    <p>You must opt in to continue. If you're not paying, you're the product.</p>
  {/if}
  
  <button disabled={!yes}>Subscribe</button>
  <style>
      h1 {
          transition: color 0.2s;
      }
  
      div {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-gap: 5px;
          max-width: 400px;
      }
  
      button {
          aspect-ratio: 1;
          border-radius: 50%;
          background: var(--color, #fff);
          transform: translate(-2px,-2px);
          filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
          transition: all 0.1s;
      }
  
      button[aria-current="true"] {
          transform: none;
          filter: none;
          box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
      }
  </style>