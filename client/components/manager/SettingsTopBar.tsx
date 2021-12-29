import React from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

interface TopbarProps {
  id3: string;
}

const SettingsTopBar: React.FC<TopbarProps> = ({ id3 }) => {
  const [settingstopbar1, setsettingstopbar1] = React.useState(true);
  const [settingstopbar2, setsettingstopbar2] = React.useState(false);
  React.useEffect(() => {
    if (id3 == "1") {
      setsettingstopbar1(true);
      setsettingstopbar2(false);
    } else if (id3 == "2") {
      setsettingstopbar1(false);
      setsettingstopbar2(true);
    }
  }, []);
  return (
    <div className="manager-seller-c-topbar">
      <div className="manager-seller-c-topbar-container">
        <Link href="/manager/activesellers">
          <div className={settingstopbar1 ? 'manager-seller-c-topbar-item active' : 'manager-seller-c-topbar-item'}>
            System
          </div>
        </Link>

        <Link href="/manager/pendingsellers">
          <div className={settingstopbar2 ? 'manager-seller-c-topbar-item active' : 'manager-seller-c-topbar-item'}>
            Events
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SettingsTopBar;