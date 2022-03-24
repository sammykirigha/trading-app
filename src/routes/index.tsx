import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import HomeIcon from "@mui/icons-material/Home";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import TableViewIcon from "@mui/icons-material/TableView";

export const MAIN = "/" as const;
export const BLOTTER = "/blotter" as const;
export const TRADETICKET = "/tradeticket" as const;

type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};

export type RouteType = {
    label: string;
    icon: IconType;
    path: typeof MAIN | typeof BLOTTER | typeof TRADETICKET;
};
export const ROUTES: RouteType[] = [
    { label: "Home", path: MAIN, icon: HomeIcon },
    { label: "Trade Blotter", path: BLOTTER, icon: TableViewIcon },
    { label: "Trade Ticket", path: TRADETICKET, icon: ConfirmationNumberIcon },
];
