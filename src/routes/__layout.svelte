<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const blurNonSelection = () => {
            document.body.classList.remove('blur');
            const shadowRoot = document.querySelector('mechanical-ragger')?.shadowRoot;

            if (!shadowRoot) {
                return undefined;
            }

            shadowRoot.childNodes.forEach((child) => child.classList.remove('blur'));

            let text = '';
            let selection = window.getSelection();
            if (selection) {
                text = window.getSelection().toString();
            } else if (document.selection && document.selection.type != 'Control') {
                text = document.selection.createRange().text;
            }

            if (text.length > 0) {
                document.body.classList.add('blur');
                shadowRoot.childNodes.forEach((child) => child.classList.add('blur'));
            }
        };

        document.addEventListener('selectionchange', function () {
            blurNonSelection();
        });
    });

    let password = '';

    const hash = (s) =>
        s.split('').reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
        }, 0);

</script>

<svelte:head>
    <style>
        body {
            background-color: var(--black);
            color: var(--white);
        }

        ::selection {
            color: var(--black);
            background-color: var(--white);
        }

        .blur {
            text-shadow: var(--blur-text-shadow) rgba(255, 255, 255, var(--blur-text-opacity));
        }

        form {
            position: fixed;
            width: 100%;
            top: 40%;
            text-align: center;
        }

        label {
            padding-right: 5px;
        }

        .passwordPageHeader {
            width: 100%;
            text-align: center;
            margin-top: 25px;
        }
    </style>
</svelte:head>

{#if hash(password) === 1217359147}
    <slot />
{:else}
    <h1 class="passwordPageHeader">Nikhil Misra</h1>
    <form>
        <input
            id="password"
            bind:value={password}
            type="password"
            placeholder="password"
            autocomplete="current-password"
        />
    </form>
{/if}
