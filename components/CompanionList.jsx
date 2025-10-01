import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils"
import Link from "next/link"
function CompanionList({ title = "Recent Sessions", companions = [], classNames = "" }) {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-2xl" >{title}</h2>

      <Table>
        
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/3 text-lg">Lessons</TableHead>
            <TableHead className=" text-lg"> Subject</TableHead>
            <TableHead className="text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, duration, name, topic }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">
                <Link href={`/companions/${id}`}>
                <div className="flex gap-2 items-center">
                  <div className="w-[72px] h-[72px] flex justify-center items-center rounded-lg max-md:hidden" style={{backgroundColor : getSubjectColor(subject)}}>
                    <img width={35} height={35} src={`/icons/${subject}.svg`} alt="" />

                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-2xl">{name}</p>
                    <p className="text-lg">{topic}</p>
                  </div>
                </div>
                </Link>
                
              </TableCell>
              <TableCell>
                <div className="subject-badge max-md:hidden flex items-center justify-center">{subject}</div>
                <div className=" md:hidden flex items-center rounded-lg justify-center p-2 w-fit" style={{backgroundColor : getSubjectColor(subject)}}>
                  <img height={18} width={18} src={`/icons/${subject}.svg`} alt="" />
                </div>
              </TableCell>
              <TableCell>
               <div className="flex items-center gap-2 text-xl justify-end w-full">
                {duration} {' '}
                <span className="max-md:hidden"> mins</span>
                <p> <img className="md:hidden" src="/icons/clock.svg" alt="" /></p>
               </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionList
