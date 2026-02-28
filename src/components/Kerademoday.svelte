<script>
    import { onMount } from "svelte";
    import axios from "axios";

    let data = [];
    let page = 1;
    let loading = false;
    let meta = {};
    let threshold = 120;
    let y;

    let showVoteModal = false;
    let selectedStartup = "";

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

    function openVotePopup(name) {
        selectedStartup = name;
        showVoteModal = true;
        document.body.style.overflow = "hidden";
    }

    function closeVotePopup() {
        showVoteModal = false;
        document.body.style.overflow = "";
    }
</script>

<svelte:window bind:scrollY={y} on:scroll={checkScroll} />

<!-- GRID -->
<div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
    {#each data as item (item.id)}
        <div class="rounded-md">
            <div class="single-blog-box flex flex-col h-full transition hover:shadow-xl rounded-md">

                <!-- LOGO -->
                <div class="flex items-center justify-center bg-white rounded-t-md border-green-600 border-b-2 py-4">
                    {#if item.attributes.logo?.data}
                        <img
                            src={"https://cms.startupmission.in" + item.attributes.logo.data.attributes.url}
                            alt={item.attributes.name}
                            class="w-2/3 py-2"
                            loading="lazy"
                        />
                    {:else}
                        <img src="/img/gg1.svg" alt="placeholder" />
                    {/if}
                </div>

                <!-- CONTENT -->
                <div class="blog-content flex-1 flex flex-col rounded-b-md relative">
                    <a
                        href={item.attributes.link
                            ? item.attributes.link.startsWith("http")
                                ? item.attributes.link
                                : `https://${item.attributes.link}`
                            : "#"}
                        target="_blank"
                        rel="noopener"
                        class="pb-4"
                    >
                        <span class="text-base leading-[1] uppercase">
                            {item.attributes.name}
                        </span>
                    </a>

                    <div class="text-xs font-semibold right-2 absolute bottom-5 items-center text-green-600 flex gap-2">
                        View details
                    </div>
                </div>

                <!-- FOOTER -->
                <div class="meta-blog h-full w-full top-1/2">
                    <span class="text-[14px] h-full w-full pt-3">
                        {item.attributes.overview}
                        <br />

                        {#if item.attributes.link}
                            <div class="flex justify-between w-full gap-2 pt-1">
                                <!-- Visit Stall -->
                                <div class="bg-white text-sm hover:shadow-xl hover:duration-500 rounded-full flex-1 px-3 text-green-600 mt-2 py-1 flex items-center justify-center">
                                    <a
                                        href={item.attributes.link.startsWith("http")
                                            ? item.attributes.link
                                            : `https://${item.attributes.link}`}
                                        target="_blank"
                                        rel="noopener"
                                        class="flex hover:text-green-700 text-sm"
                                    >
                                        Visit Stall
                                    </a>
                                </div>

                                <!-- Vote Button -->
                                <div class="bg-white  flex text-sm hover:shadow-xl hover:duration-500 rounded-full flex-1 px-3 text-green-600 mt-2  py-1 flex items-center justify-center cursor-pointer"
                                    on:click={() => openVotePopup(item.attributes.name)}>
                                    Vote
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

<!-- ================= ZOHO POPUP ================= -->

{#if showVoteModal}
<div id="formsLightBox_138393">
    <div class="zf_lB_Wrapper_138393">
        <div id="containerDiv_138393" class="zf_lB_Container_138393">
            
            <!-- IFRAME -->
            <div class="zf_main_id_138393">
                <iframe
                    src={`https://forms.zohopublic.com/keralastartupmission/form/KeraVoteforStartup/formperma/z1RYu2jwfs-nDOqcG_qym7W52FEsg72xiUiIOGBHJog?zf_rszfm=1&startupname=${encodeURIComponent(selectedStartup)}`}
                    style="border:none;width:100%;min-height:500px;"
                ></iframe>
            </div>

            <!-- CLOSE BUTTON -->
            <div
                class="zf_lb_closeform_138393"
                tabindex="0"
                on:click={closeVotePopup}
            ></div>
        </div>
    </div>

    <!-- DIMMER -->
    <div
        class="zf_lB_Dimmer_138393"
        on:click={closeVotePopup}
    ></div>
</div>
{/if}

<style>
/* ======= SAME ZOHO CLASSES (UNCHANGED) ======= */

.zf_lB_Dimmer_138393 { 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0);
    opacity: 0.8;
    z-index: 10000000;
}

.zf_lB_Container_138393{
	position: fixed;
	background-color: white;
	height: 80%;
	width: 70%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-height: calc(100% - 60px);
	z-index: 999999;
	transition: height 0.5s ease;
	outline: none;
}

.zf_lB_Wrapper_138393{
	position: fixed;
    top: 50%;
    left: 50%;
    z-index: 10000001;
}

.zf_main_id_138393{
	height: 100%;
	display: flex;
	overflow-y: auto;
	overflow-x: hidden;
}

.zf_lb_closeform_138393 {
    position: absolute;
    right: -20px;
    background: #2f2e2e;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    top: -15px;
    cursor: pointer;
    border: 2px solid #d9d9d9;
}

.zf_lb_closeform_138393:before,
.zf_lb_closeform_138393:after {
    position: absolute;
    left: 16px;
    content: ' ';
    height: 19px;
    width: 2px;
    top: 7px;
    background-color: #f7f7f7;
}

.zf_lb_closeform_138393:before { transform: rotate(45deg); }
.zf_lb_closeform_138393:after { transform: rotate(-45deg); }

@media screen and (max-width: 768px) {
    .zf_lB_Container_138393 {
        width: 95% !important;
        height: 85%;
    }
}
</style>
