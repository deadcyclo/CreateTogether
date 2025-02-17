onEvent('jei.hide.items', (event) => {
    const items = [
        /quark:limestone/,
        /quark:\w+_limestone/,
        /refinedstorage:(?!controller|cable|crafting_grid|external_storage)\w+/,
        /exnihilosequentia:(?!hammer|sieve|mesh)\w+/,
        /quark:\w+_shard/
    ];

    items.forEach((item) => {
        event.hide(item);
    });

    [
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black',
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray'
    ].forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });
});
