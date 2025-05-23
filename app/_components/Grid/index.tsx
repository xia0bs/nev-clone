import { Bio } from "_components/Bio"
import { CaseStudy } from "_components/CaseStudy"
import { Map } from "_components/Map"
import { heights, layouts } from "_data/shared"
import { FilterType } from "_types/types"
import cn from "classnames"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"

import { Spotify } from "_components/Spotify"
import { Toggler } from "_components/Toggler"
import { Twitter } from "_components/Twitter"
import {
	WidthProvider,
	ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next"

const ResponsiveGridLayout = WidthProvider(Responsive)

export const Grid = ({
	themeToggler,
	filter,
}: {
	themeToggler: () => void
	filter: FilterType
}) => {
	const [height, setHeight] = useState(280)
	const [isDraggable, setDraggable] = useState(true)
	const [isMounted, setMounted] = useState(false)

	useEffect(() => {
		if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
			setDraggable(false)
		}

		setTimeout(() => {
			setMounted(true)
		}, 500)
	}, [])

	const opacityValue = (section: string) =>
		filter === "all" || section === filter ? 1 : 0.25

	return (
		<div className={styles.container}>
			<ResponsiveGridLayout
				useCSSTransforms
				className={styles.layout}
				layouts={layouts[filter]}
				breakpoints={{
					lg: 1199,
					md: 799,
					sm: 374,
					xs: 319,
				}}
				cols={{
					lg: 4,
					md: 4,
					sm: 2,
					xs: 2,
				}}
				rowHeight={height}
				isBounded
				isDraggable={isDraggable}
				onBreakpointChange={(breakpoint: any) => {
					setHeight(heights[breakpoint])
				}}
				margin={[16, 16]}>
				<div
					key="bio"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("about"),
					}}>
					<Bio />
				</div>
				<div
					key="map"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("about"),
					}}>
					<Map />
				</div>
				<div
					key="blog"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("projects"),
					}}>
					<CaseStudy
						bg="images/recroot-bg.svg"
						image="images/blog.png"
						title="博客"
						href="https://blog.yanng.cn"
					/>
				</div>
				<div
					key="spotify"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("media"),
					}}>
					<Spotify />
				</div>
				<div
					key="twitter"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("about"),
					}}>
					<Twitter />
				</div>
				<div
					key="feed"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("projects"),
					}}>
					<CaseStudy
						bg="images/vouch-for-bg.svg"
						image="images/media.png"
						title="书影音游"
						href="https://feed.yanng.cn"
					/>
				</div>
				
				<div
					key="mode-toggle"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("other"),
					}}>
					<Toggler themeToggler={themeToggler} />
				</div>

			</ResponsiveGridLayout>
		</div>
	)
}
