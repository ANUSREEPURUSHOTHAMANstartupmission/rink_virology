<script>
    import { onMount } from "svelte";
    import axios from "axios";

    let data = [];
    let page = 1;
    let loading = false;
    let meta = {};
    let threshold = 120;
    let y;

    async function getData() {
        if (loading) return;
        loading = true;

        try {
           const res = await axios.get(
  `https://cms.startupmission.in/api/kerademodays?populate=*&sort[0]=order:asc&pagination[page]=${page}&pagination[pageSize]=100`
);


            data = [...data, ...res.data.data];
            meta = res.data.meta;

        } catch (e) {
            console.error(e);
        }

        loading = false;
    }

    onMount(() => {
        getData();
    });

    function checkScroll() {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        if (y > maxScroll - threshold) {
            if (page < meta?.pagination?.pageCount) {
                page++;
                getData();
            }
        }
    }
</script>

<svelte:window bind:scrollY={y} on:scroll={checkScroll} />

<!-- GRID -->
<div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
    {#each data as item (item.id)}
        <div class="rounded-md">
            <div class="single-blog-box flex flex-col h-full transition hover:shadow-xl rounded-md">

                <!-- LOGO -->
                <div class=" flex items-center justify-center bg-white rounded-t-md border-green-600 border-b-2 py-4">
                    {#if item.attributes.logo?.data}
                        <img
                            src={"https://cms.startupmission.in" + item.attributes.logo.data.attributes.url}
                            alt={item.attributes.name}
                            class=" w-2/3 py-2"
                            loading="lazy"
                        />
                    {:else}
                        <img src="/img/gg1.svg" alt="placeholder" />
                    {/if}
                </div>

                <!-- CONTENT -->
                <div class="blog-content flex-1 flex flex-col rounded-b-md">
                    <!-- <div class="blog-text">
                        <span>Startup</span>
                    </div> -->

                    <a href={item.attributes.link
                            ? item.attributes.link.startsWith("http")
                                ? item.attributes.link
                                : `https://${item.attributes.link}`
                            : "#"}
                        target="_blank"
                        rel="noopener"
                        class="pb-4"
                    >
                        <span class="text-base leading-[1] uppercase">{item.attributes.name}</span>

                       
                    </a>
                    <div class="text-xs font-semibold right-2 absolute bottom-5 items-center text-green-600 flex gap-2">
                        View details 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </div>
<!-- 
                    <p class="text-sm text-gray-600 mt-2 line-clamp-3">
                        {item.attributes.overview}
                    </p> -->
                </div>

                <!-- FOOTER -->
                <div class="meta-blog h-full w-full top-1/2" style="font-family: 'Albert Sans', sans-serif;">
                    <span class="text-[14px] h-full w-full ">
                        <!-- <span class="text-[14px] font-bold pb-2 uppercase p-0 pt-1 ">{item.attributes.name}</span> <br>  -->
                        {item.attributes.overview}
                        <br> 
                        {#if item.attributes.link}
                        <div class="flex justify-between w-full gap-2 pt-1">
                            <div class=" bg-white text-sm hover:shadow-xl hover:duration-500 rounded-full w-auto flex- z-50 flex-1  px-3 text-green-600  mt-2 py-2  bottom-4 flex flex-col items-center justify-center my-auto">
                                    <a href={item.attributes.link
                                            ? item.attributes.link.startsWith("http")
                                                ? item.attributes.link
                                                : `https://${item.attributes.link}`
                                            : "#"}
                                        target="_blank"
                                        rel="noopener" class="p-0 flex hover:text-green-700 text-sm" >
                                    Visit Stall<i class="bi bi-arrow-right-short"></i>
                                    </a>
                            </div>

                            <div class=" bg-white text-sm hover:shadow-xl hover:duration-500 rounded-full w-auto flex- z-50 flex-1  px-3 text-green-600  mt-2 py-2  bottom-4 flex flex-col items-center justify-center my-auto">
                                    <a href={`https://forms.zohopublic.com/keralastartupmission/form/KeraVoteforStartup/formperma/z1RYu2jwfs-nDOqcG_qym7W52FEsg72xiUiIOGBHJog?startupname=${encodeURIComponent(item.attributes.name)}`}
                                        target="_blank"
                                        rel="noopener" class="p-0 flex hover:text-green-700 text-sm" >
                                    Vote<i class="bi bi-arrow-right-short"></i>
                                    </a>
                            </div>
                        </div>
                       {/if}
                    </span>
                   
                </div>
            </div>
        </div>
    {/each}
</div>

<!-- LOADER -->
{#if loading}
<div class="flex justify-center py-6">
    <svg class="animate-spin h-6 w-6 text-black" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"></path>
    </svg>
</div>
{/if}


