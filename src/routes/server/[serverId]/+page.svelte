<script>
	export let data;
</script>

<svelte:head>
    <title>BraveAnalytics</title> 
</svelte:head>

<div class="post-list">
	<h1 class="text-3xl font-bold underline">Server</h1>
	{#await data.lazy.server}
		<p>Loading server...</p>
	{:then server}
		<div class="w-full">
			<figure class="h-16 w-full">
				{#if server.Data.vars.banner_detail}
					<img
						class="h-full object-cover overflow-hidden"
						src={server.Data.vars.banner_detail}
						alt="Shoes"
						loading="lazy"
					/>
				{:else}
					<div
						class="h-full w-full flex justify-center items-center bg-base-300"
					>
						<h3>No server banner provided</h3>
					</div>
				{/if}
			</figure>
			<div class="card-body">
				<div class="prose prose-lg">
					<div class="flex h-auto items-start">
						<h2 class="mb-1 mt-0 grow">
							{server.Data.vars.sv_projectName.replace(
								/\^(\d)/g,
								""
							)}
						</h2>
						<div class="badge badge-secondary">
							{server.Data.clients}
						</div>
					</div>

					<p>
						{server.Data.vars.sv_projectDesc.replace(/\^(\d)/g, "")}
					</p>
				</div>

				<p>{server.EndPoint}</p>
				<div class="stats shadow">
					<div class="stat place-items-center">
						<div class="stat-title">Downloads</div>
						<div class="stat-value">31K</div>
						<div class="stat-desc">Jan 1st - Feb 1st</div>
					</div>

					<div class="stat place-items-center">
						<div class="stat-title">New Users</div>
						<div class="stat-value">4,200</div>
						<div class="stat-desc">↗︎ 400 (22%)</div>
					</div>

					<div class="stat place-items-center">
						<div class="stat-title">New Registers</div>
						<div class="stat-value">1,200</div>
						<div class="stat-desc">↘︎ 90 (14%)</div>
					</div>
				</div>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">Fashion</div>
					<div class="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	{:catch}
		<p>Error loading server...</p>
	{/await}
</div>
