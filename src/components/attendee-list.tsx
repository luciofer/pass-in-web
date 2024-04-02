import {
    Search,
    MoreHorizontal,
    ChevronsLeft,
    ChevronLeft,
    ChevronRight,
    ChevronsRight,
} from "lucide-react"

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participants</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input
                        className="bg-transparent flex-1 outline-none p-0 text-sm border-0 ring-0"
                        placeholder="Search participant"
                    />
                </div>
            </div>

            <div className="border border-white/10 rounded-lg">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th
                                style={{ width: 48 }}
                                className="py-3 px-4 text-sm font-semibold text-left"
                            >
                                <input
                                    type="checkbox"
                                    className="size-4 bg-black/20 rounded border-white/10 checked:bg-orange-400"
                                />
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">
                                id
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">
                                Participant
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">
                                Subs Date
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">
                                Check-in Date
                            </th>
                            <th
                                style={{ width: 64 }}
                                className="py-3 px-4 text-sm font-semibold text-left"
                            ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 8 }).map((_, i) => {
                            return (
                                <tr
                                    key={i}
                                    className="border-b border-white/10 hover:bg-white/5"
                                >
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        <input
                                            type="checkbox"
                                            className="size-4 bg-black/20 rounded border-white/10 "
                                        />
                                    </td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        14324124
                                    </td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-white">
                                                John Doe
                                            </span>
                                            <span>john@dev.com</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        7 days ago
                                    </td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        3 days ago
                                    </td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        <button className="bg-black/20 border border-white/10 p-1.5 rounded-md">
                                            <MoreHorizontal className="size-4" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td
                                className="py-3 px-4 text-sm text-left text-zinc-300"
                                colSpan={3}
                            >
                                Showing 10 of 228
                            </td>
                            <td
                                className="py-3 px-4 text-sm text-right text-zinc-300"
                                colSpan={3}
                            >
                                <div className="inline-flex gap-8 items-center">
                                    <span>Page 1 of 11</span>
                                    <div className="flex gap-1.5">
                                        <button className="bg-white/10 border border-white/10 p-1.5 rounded-md">
                                            <ChevronsLeft className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border border-white/10 p-1.5 rounded-md">
                                            <ChevronLeft className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border border-white/10 p-1.5 rounded-md">
                                            <ChevronRight className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border border-white/10 p-1.5 rounded-md">
                                            <ChevronsRight className="size-4" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
