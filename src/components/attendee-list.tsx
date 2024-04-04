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
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendees"

import dayjs from "dayjs"
import relativeTive from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTive)

export function AttendeeList() {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)

    const totalPages = Math.ceil(attendees.length / 10)

    function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    function goToNextPage() {
        setPage(page + 1)
    }
    function goToPreviousPage() {
        setPage(page - 1)
    }
    function goToLastPage() {
        setPage(totalPages)
    }
    function goToFirstPage() {
        setPage(1)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participants</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input
                        onChange={onSearchInputChange}
                        className="bg-transparent flex-1 outline-none p-0 text-sm border-0 ring-0"
                        placeholder="Search participant"
                    />
                </div>

                {search}
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
                    {attendees
                        .slice((page - 1) * 10, page * 10)
                        .map((attendee) => {
                            return (
                                <TableRow
                                    key={attendee.id}
                                    className="border-b border-white/10 hover:bg-white/5"
                                >
                                    <TableCell>
                                        <input
                                            type="checkbox"
                                            className="size-4 bg-black/20 rounded border-white/10 "
                                        />
                                    </TableCell>
                                    <TableCell>{attendee.id}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-white">
                                                {attendee.name}
                                            </span>
                                            <span>{attendee.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {dayjs().to(attendee.createdAt)}
                                    </TableCell>
                                    <TableCell>
                                        {dayjs().to(attendee.checkedAt)}
                                    </TableCell>
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
                        <TableCell colSpan={3}>
                            Showing 10 of {attendees.length}
                        </TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex gap-8 items-center">
                                <span>
                                    Page {page} of {totalPages}
                                </span>
                                <div className="flex gap-1.5">
                                    <IconButton
                                        onClick={goToFirstPage}
                                        disabled={page === 1}
                                    >
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        onClick={goToPreviousPage}
                                        disabled={page === 1}
                                    >
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        onClick={goToNextPage}
                                        disabled={page === totalPages}
                                    >
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        onClick={goToLastPage}
                                        disabled={page === totalPages}
                                    >
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
