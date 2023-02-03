<script lang="ts">
  import { useWallet, useBalance } from "@connect2ic/svelte"

  const [wallet] = useWallet()
  const [assets] = useBalance()

  let visible: boolean = false;

  function toggleVissible() {
		visible = !visible;
	}

  // change into dropdown menu from allkinds
</script>


{#if $wallet}
  <div class="fancy-border ">
	<div class="rounded-full self-end bg-grey-200 connect-button" on:click={toggleVissible} on:keydown={toggleVissible}>
		
    


      {#if !visible}
        {$wallet.principal}
      {:else}
        <!-- close -->
        {$wallet.principal}
      {/if}
</div>

    
	



	{#if visible}
    <div  
      class="top-14 m-2 fancy-border rounded-md fixed right-0"
      on:mouseleave={toggleVissible}
    >

    <div class="bg-dark-m/80 rounded-md p-2 text-white-m">
      <!-- assets may take some time to load, display this (tailwind has something for that) -->
      {#if $wallet}
        <p>Wallet address: <span style="font-size: 0.7em">{$wallet.principal}</span></p>
        <table>
          <tbody>
          {#if $assets}
            {#each $assets as asset}
              <tr>
                <td>
                  {asset.name}
                </td>
                <td>
                  {asset.amount}
                </td>
              </tr>
            {/each}
          {/if}
          </tbody>
        </table>
      {:else}
      <!-- could remove bcs doesnt show without wallet anyway -->
        <p class="example-disabled">Connect with a wallet to access this example</p>
      {/if}
    </div>
      
    </div>
	{/if}

</div>
{/if}


