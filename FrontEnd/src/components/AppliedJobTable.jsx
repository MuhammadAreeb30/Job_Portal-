import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  return (
    <Table>
      <TableCaption>A list of your applied jobs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-primary">Date</TableHead>
          <TableHead className="text-primary">Job Role</TableHead>
          <TableHead className="text-primary">Company</TableHead>
          <TableHead className="text-right text-primary">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2].map((i) => {
          return (
            <TableRow key={i}>
              <TableCell>12-04-2012</TableCell>
              <TableCell>Front End Developer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right">
                <Badge>Selected</Badge>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default AppliedJobTable;
