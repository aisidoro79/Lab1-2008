import { toElement } from './../utils/toElement';

function toDoItemTemplate(todo, status, description, finish) {
	const template = `
    <div class="p-3">
        <div class="flex flex-col border shadow-sm rounded-xl bg-amber-500 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="p-4 md:p-5">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                ${todo}
                </h3>
            <div class="flex justify-between mt-3">
                <button type="button" class="p-2 inline-flex items-center text-sm font-semibold rounded-lg bg-sky-950 text-white hover:bg-amber-950 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                ${status}
                </button>
                <p class="mt-2 text-orange-950">
                Due Date: ${finish}
                </p>
                </div>
            </div>
            <div class="border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 bg-amber-950 dark:border-gray-700">
                <p class="mt-1 text-lg text-white">
                ${description}
                </p>
            </div>
        </div>
    </div>
    `;

	return toElement(template);
}

export {toDoItemTemplate};