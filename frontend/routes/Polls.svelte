<script lang="ts">
  import { useCanister } from "@connect2ic/svelte"
  import Proposal from "../components/Proposal.svelte"


  const [dao] = useCanister("dao")

  const getProposals = async () => {
    let res = await $dao.get_all_proposals()
    if(res) {
      return res
      
    } else {
      throw new Error("Could not fetch polls")
    }
  }
  
  let promise = getProposals()
  console.log(promise)
</script>

<div class="flex flex-col gap-10 bg-dark-600/20 rounded-2xl p-5">
  {#await promise}
    <p>Loading polls...</p>
  {:then proposals}
   <div class="flex flex-col gap-3 ">
    Polls
    {#each proposals as msg}
      <Proposal {msg}/>
    {/each}
   </div>
  {:catch error}
    <p class="">{error.message}</p>
  {/await}
</div>