<script>
  import { categories } from "./categories.js";

  let selectedCategory = null;
  let selectedProblem = null;

  function openCategory(cat) {
    selectedCategory = cat;
    if (cat.problem_statements?.length === 1) {
      selectedProblem = cat.problem_statements[0];
    }
  }

  function openProblem(ps) {
    selectedProblem = ps;
  }

  function goBack() {
    if (selectedProblem) {
      selectedProblem = null;
      return;
    }
    if (selectedCategory) {
      selectedCategory = null;
    }
  }

  // Render paragraph / list blocks
  function renderBlocks(blocks) {
    if (!Array.isArray(blocks)) return [];
    return blocks
      .map((block, i) => {
        if (block?.kind === "paragraph") {
          return { type: "p", key: i, value: block.text };
        }
        if (block?.kind === "list") {
          return { type: "ul", key: i, value: block.items || [] };
        }
        return null;
      })
      .filter(Boolean);
  }

  // Teaser text for cards
  function getTeaser(ps) {
    const para =
      ps.problem_statement?.find(b => b.kind === "paragraph")?.text || "";
    return para
      ? para.slice(0, 160) + (para.length > 160 ? "..." : "")
      : "";
  }

  const FIELD_LABELS = {
    crop_focus: "Crop Focus",
    gravity: "Gravity",
    innovation_opportunities: "Innovation Opportunities",
    use_case_example: "Use Case Example"
  };

  const FIELD_ORDER = [
    "crop_focus",
    "gravity",
    "innovation_opportunities",
    "use_case_example"
  ];

  $: psId = selectedProblem?.ps_id ?? "";

  $: applyHref =
    `https://forms.startupmission.in/keralastartupmission/form/KeralaAIMissionStartupProposal1/formperma/wsMh_aulDwlaybSSRtyTCOOslRTaI0syaF9l01IKVdQ` +
    `?category=${encodeURIComponent(selectedCategory?.name ?? "")}` +
    `&problem=${encodeURIComponent(psId)}`;
</script>

<!-- ================= LEVEL 1 : CATEGORIES ================= -->
{#if !selectedCategory}
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each categories as cat}
      <button
        class="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
        on:click={() => openCategory(cat)}
      >
        <h3 class="text-lg font-semibold text-slate-900">
          {cat.code}: {cat.name}
        </h3>
        <p class="mt-2 text-sm text-slate-600">
          {cat.problem_statements.length} Challenges
        </p>
      </button>
    {/each}
  </div>
{/if}

<!-- ================= LEVEL 2 : PROBLEM CARDS ================= -->
{#if selectedCategory && !selectedProblem}
  <div class="mb-6">
    <button class="text-blue-700 hover:underline" on:click={goBack}>
      ← Back
    </button>
  </div>

  <h2 class="mb-8 text-xl font-bold text-slate-900">
    {selectedCategory.code}: {selectedCategory.name}
  </h2>

  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each selectedCategory.problem_statements as ps}
      <button
        class="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
        on:click={() => openProblem(ps)}
      >
        <h4
          class="text-lg font-semibold text-slate-900 truncate"
          title={ps.title}
        >
          {ps.title}
        </h4>

        <p class="mt-3 line-clamp-3 text-sm text-slate-700">
          {getTeaser(ps)}
        </p>

        <span class="mt-3 inline-block text-sm font-medium text-blue-700">
          Learn More →
        </span>
      </button>
    {/each}
  </div>
{/if}

<!-- ================= LEVEL 3 : FULL DETAIL ================= -->
{#if selectedProblem}
  <div class="mb-6">
    <button class="text-blue-700 hover:underline" on:click={goBack}>
      ← Back
    </button>
  </div>

  <h2 class="mb-6 text-xl font-bold text-slate-900">
    {selectedProblem.title}
  </h2>

  <!-- Problem Statement -->
  <section class="mb-8">
    <h3 class="mb-3 text-lg font-semibold text-slate-600">
      Problem Statement
    </h3>

    {#each renderBlocks(selectedProblem.problem_statement) as block (block.key)}
      {#if block.type === "p"}
        <p class="mb-2 text-base leading-relaxed text-black">
          {block.value}
        </p>
      {:else if block.type === "ul"}
        <ul class="mb-2 list-disc ps-6 text-black">
          {#each block.value as li}
            <li class="leading-relaxed">{li}</li>
          {/each}
        </ul>
      {/if}
    {/each}
  </section>

  <!-- Details Table -->
  <section class="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
    <table class="w-full border-collapse text-sm">
      <tbody>
        {#each FIELD_ORDER as key}
          {#if selectedProblem[key]?.length}
            <tr class="border-t border-gray-100">
              <td class="w-1/3 bg-gray-50 px-4 py-3 font-medium text-slate-700 align-top">
                {FIELD_LABELS[key]}
              </td>
              <td class="px-4 py-3 text-slate-800">
                {#each renderBlocks(selectedProblem[key]) as block}
                  {#if block.type === "p"}
                    <p class="mb-2">{block.value}</p>
                  {:else if block.type === "ul"}
                    <ul class="list-disc ps-5">
                      {#each block.value as li}
                        <li>{li}</li>
                      {/each}
                    </ul>
                  {/if}
                {/each}
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </section>

  <!-- Apply -->
  <div class="mt-8 flex w-full items-center justify-end gap-3">
    <span class="inline-flex items-center rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
      ID: {psId}
    </span>

    <a
      class="flex items-center justify-center rounded-md bg-gradient-to-b from-indigo-900 to-fuchsia-700 px-8 py-2 text-white"
      target="_blank"
      href={applyHref}
    >
      Apply Now
    </a>
  </div>
{/if}

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
