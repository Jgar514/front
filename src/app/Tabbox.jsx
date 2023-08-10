import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Projects from "./Projects";
import "./styles.css";

const Tabbox = () => {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	const handleTabChange = (e, tabIndex) => {
		console.log(tabIndex);
		setCurrentTabIndex(tabIndex);
	};

	return (
		<React.Fragment>
			<Tabs value={currentTabIndex} onChange={handleTabChange}>
				<Tab label="Tab 1" />
				<Tab label="Tab 2" />
				<Tab label="Tab 3" />
				<Tab label="Tab 4" />
			</Tabs>

			{/* TAB 1 Contents */}
			{currentTabIndex === 0 && (
				<Box sx={{ p: 3 }}>
					<Projects />
				</Box>
			)}

			{/* TAB 2 Contents */}
			{currentTabIndex === 1 && (
				<Box sx={{ p: 3 }}>
					<Typography variant="h5">Tab 2 Content</Typography>
				</Box>
			)}

			{/* TAB 3 Contents */}
			{currentTabIndex === 2 && (
				<Box sx={{ p: 3 }}>
					<Typography variant="h5">Tab 3 Content</Typography>
				</Box>
			)}

			{/* TAB 4 Contents */}
			{currentTabIndex === 3 && (
				<Box sx={{ p: 3 }}>
					<Typography variant="h5">Tab 4 Content</Typography>
				</Box>
			)}
		</React.Fragment>
	);
};
export default Tabbox;
