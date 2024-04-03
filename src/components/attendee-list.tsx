import {
    Search,
    MoreHorizontal,
    ChevronsLeft,
    ChevronLeft,
    ChevronRight,
    ChevronsRight,
} from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"

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

            <Table>
                <thead>
                    <tr className="border-b border-white/10">
                        <TableHeader style={{ width: 48 }}>
                            <input
                                type="checkbox"
                                className="size-4 bg-black/20 rounded border-white/10 checked:bg-orange-400"
                            />
                        </TableHeader>
                        <TableHeader>id</TableHeader>
                        <TableHeader>Participant</TableHeader>
                        <TableHeader>Subs Date</TableHeader>
                        <TableHeader>Check-in Date</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 8 }).map((_, i) => {
                        return (
                            <TableRow
                                key={i}
                                className="border-b border-white/10 hover:bg-white/5"
                            >
                                <TableCell>
                                    <input
                                        type="checkbox"
                                        className="size-4 bg-black/20 rounded border-white/10 "
                                    />
                                </TableCell>
                                <TableCell>14324124</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">
                                            John Doe
                                        </span>
                                        <span>john@dev.com</span>
                                    </div>
                                </TableCell>
                                <TableCell>7 days ago</TableCell>
                                <TableCell>3 days ago</TableCell>
                                <TableCell>
                                    <IconButton transparent>
                                        <MoreHorizontal className="size-4" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>

                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Showing 10 of 228</TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex gap-8 items-center">
                                <span>Page 1 of 11</span>
                                <div className="flex gap-1.5">
                                    <IconButton>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}
