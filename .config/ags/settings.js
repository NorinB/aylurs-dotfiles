/* exported avatar, wallpapers, openSettings, atUser */

const USER = imports.gi.GLib.get_user_name();
const HOME = '/home/'+USER;

var avatar = `${HOME}/Pictures/avatars/donna.jpg`;

var wallpapers = [
    '', // workspaces start from 1
    `${HOME}/Pictures/Wallpapers/kitty/kittyr2.jpeg`,
    `${HOME}/Pictures/Wallpapers/kitty/kittyy2.jpeg`,
    `${HOME}/Pictures/Wallpapers/kitty/kittyc2.jpeg`,
    `${HOME}/Pictures/Wallpapers/kitty/kittyg2.jpeg`,
    `${HOME}/Pictures/Wallpapers/kitty/kittyb2.jpeg`,
    `${HOME}/Pictures/Wallpapers/kitty/kittym2.jpeg`,
    `${HOME}/Pictures/Wallpapers/kitty/kittyw.jpeg`,
    // `${HOME}/Pictures/Wallpapers/etc/art.png`,
];

var openSettings = `wezterm start nvim ${HOME}/.config/ags`;

// var atUser = `@${USER}`;
var atUser = '@Aylur';
