/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723541306", {
    template: `
    <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Discover Your Next Favorite Product</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Explore a world of innovative and exciting new items tailored to your interests</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Start Discovering Now</a>
                </div>
            </div>
        </div>
    </section>

23:    <div class="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg">
24:        <div class="mb-4">
25:            <h2 class="text-2xl font-bold">Login</h2>
26:        </div>
27:        <form>
28:            <div class="mb-4">
29:                <label class="block text-gray-700 font-bold mb-2" for="username">
30:                    Username
31:                </label>
32:                <input
33:                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
34:                    id="username"
35:                    type="text"
36:                    placeholder="Enter your username"
37:                />
38:            </div>
39:            <div class="mb-6">
40:                <label class="block text-gray-700 font-bold mb-2" for="password">
41:                    Password
42:                </label>
43:                <input
44:                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
45:                    id="password"
46:                    type="password"
47:                    placeholder="Enter your password"
48:                />
49:            </div>
50:            <div class="flex items-center justify-between">
51:                <button
52:                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
53:                    type="button"
54:                >
55:                    Sign In
56:                </button>
57:            </div>
58:        </form>
59:    </div>
    <div class="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg">
        <div class="mb-4">
            <h2 class="text-2xl font-bold">Login</h2>
        </div>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    Username
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Sign In
                </button>
            </div>
        </form>
    </div>
        <div class="mb-4">
            <h2 class="text-2xl font-bold">Login</h2>
        </div>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    Username
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Sign In
                </button>
            </div>
        </form>
    </div>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
