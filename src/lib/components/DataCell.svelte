<script>
	import { Badge } from 'flowbite-svelte';
	export let item;
	export let col;

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
		console.log(val);
		console.log(through);
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
	<Badge class="capitalize" color={badgeColor(item[col.data], col.color)}
		>{item[col.data]
			.split('_')
			.map((v, i) => {
				return v;
			})
			.join(' ')}</Badge
	>
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
