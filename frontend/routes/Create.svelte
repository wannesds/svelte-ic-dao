<script lang="ts">
  import { useCanister } from "@connect2ic/svelte"

  const [dao] = useCanister("dao")

  let input = ""
  let showRes : Boolean = false;
  let msg;
  //let msg


  const createProposal = async (msgpayload) => {
    showRes = true;
    let res = await $dao.submit_proposal(msgpayload)
    if(res.Ok) {
      return res.Ok
    } else {
      throw new Error(res.Err)
    }
  }

  let promise = createProposal(msg);

  const handleClick = () => {
    msg = input
    promise = createProposal(msg)
  }
</script>

<div class="flex flex-col gap-10 bg-dark-600/20 rounded-2xl  py-24 "> 

  <input
    bind:value={input}
    class="w-11/12 lg:w-8/12 m-auto bg-teal-500/30 rounded-full p-2 outline-none"
    placeholder="type your question..."
  />

  <div class="fancy-border m-auto">
    <button class="bg-black/70 rounded-full text-white-800 p-1 px-6 hover:bg-black/0" on:click={handleClick}>
      Create poll
    </button>
  </div>

  {#if msg}
    <div class="m-auto">
      {#await promise}
        <p>Accessing the matrix...</p>
      {:then object}
        <p>Poll created : "{msg}"</p>
      {:catch error}
        <p class="text-red-500">{error.message}</p>
      {/await}
    </div>
  {/if}

</div>
