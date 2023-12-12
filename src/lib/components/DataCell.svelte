<script>
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';

	import { Badge, Img } from 'flowbite-svelte';
	export let item;
	export let col;
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
	function badgeColor(value, conditionList) {
		var resultList = conditionList.filter((v, i) => {
			return v.key == value;
		});

		if (resultList.length > 0) {
			return resultList[0].value;
		} else {
			return 'pink';
		}
	}

	function checkAssoc(data, val, through) {
		try {
			if (data[through[0]]) {
				return data[through[0]][val];
			} else {
				return '';
			}
		} catch (e) {
			return '';
		}
	}
</script>

{#if col.subtitle != null}
	{item[col.data]}
	<br />
	<small class="font-extralight dark:text-white">
		{item[col.subtitle.data]}
	</small>
{:else if col.through != null}
	{checkAssoc(item, col.data, col.through)}
{:else if col.color != null}
	<Badge class="capitalize" color={badgeColor(item[col.data], col.color)}>{item[col.data]}</Badge>
{:else if col.showImg != null}
	<div style="width: 80px;" >
		<Img   class="rounded-lg" src="{url}{item[col.data]}" />

	</div>
{:else if col.isBadge}
	<Badge class="capitalize" color="pink"
		>{item[col.data] == null
			? ''
			: item[col.data]
					.split('_')
					.map((v, i) => {
						return v;
					})
					.join(' ')}</Badge
	>
{:else}
	{item[col.data] == null ? '' : item[col.data]}
{/if}
