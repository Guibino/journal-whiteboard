import { EditorAssetUrls } from "@tldraw/tldraw";
import { UiAssetUrls } from "@tldraw/ui";
import { CANNONICAL_NAME } from "../constants";

export const formatAssetUrl = (assetUrl) => {
    return `modules/${CANNONICAL_NAME}/${assetUrl}`;
}


export const getEditorAssetUrls = (): EditorAssetUrls => {
	return {
		fonts: {
			monospace: formatAssetUrl('fonts/IBMPlexMono-Medium.woff2'),
			sansSerif: formatAssetUrl('fonts/IBMPlexSans-Medium.woff2'),
			serif: formatAssetUrl('fonts/IBMPlexSerif-Medium.woff2'),
			draw: formatAssetUrl('fonts/Shantell_Sans-Normal-SemiBold.woff2'),
		},

    }
}

export const getUiAssetUrls = (): UiAssetUrls => {
	return {
		icons: {
			'align-bottom-center': formatAssetUrl('icons/align-bottom-center.svg'),
			'align-bottom-left': formatAssetUrl('icons/align-bottom-left.svg'),
			'align-bottom-right': formatAssetUrl('icons/align-bottom-right.svg'),
			'align-bottom': formatAssetUrl('icons/align-bottom.svg'),
			'align-center-center': formatAssetUrl('icons/align-center-center.svg'),
			'align-center-horizontal': formatAssetUrl('icons/align-center-horizontal.svg'),
			'align-center-left': formatAssetUrl('icons/align-center-left.svg'),
			'align-center-right': formatAssetUrl('icons/align-center-right.svg'),
			'align-center-vertical': formatAssetUrl('icons/align-center-vertical.svg'),
			'align-left': formatAssetUrl('icons/align-left.svg'),
			'align-right': formatAssetUrl('icons/align-right.svg'),
			'align-top-center': formatAssetUrl('icons/align-top-center.svg'),
			'align-top-left': formatAssetUrl('icons/align-top-left.svg'),
			'align-top-right': formatAssetUrl('icons/align-top-right.svg'),
			'align-top': formatAssetUrl('icons/align-top.svg'),
			'arrow-left': formatAssetUrl('icons/arrow-left.svg'),
			'arrowhead-arrow': formatAssetUrl('icons/arrowhead-arrow.svg'),
			'arrowhead-bar': formatAssetUrl('icons/arrowhead-bar.svg'),
			'arrowhead-diamond': formatAssetUrl('icons/arrowhead-diamond.svg'),
			'arrowhead-dot': formatAssetUrl('icons/arrowhead-dot.svg'),
			'arrowhead-none': formatAssetUrl('icons/arrowhead-none.svg'),
			'arrowhead-square': formatAssetUrl('icons/arrowhead-square.svg'),
			'arrowhead-triangle-inverted': formatAssetUrl('icons/arrowhead-triangle-inverted.svg'),
			'arrowhead-triangle': formatAssetUrl('icons/arrowhead-triangle.svg'),
			'aspect-ratio': formatAssetUrl('icons/aspect-ratio.svg'),
			avatar: formatAssetUrl('icons/avatar.svg'),
			blob: formatAssetUrl('icons/blob.svg'),
			'bring-forward': formatAssetUrl('icons/bring-forward.svg'),
			'bring-to-front': formatAssetUrl('icons/bring-to-front.svg'),
			check: formatAssetUrl('icons/check.svg'),
			'checkbox-checked': formatAssetUrl('icons/checkbox-checked.svg'),
			'checkbox-empty': formatAssetUrl('icons/checkbox-empty.svg'),
			'chevron-down': formatAssetUrl('icons/chevron-down.svg'),
			'chevron-left': formatAssetUrl('icons/chevron-left.svg'),
			'chevron-right': formatAssetUrl('icons/chevron-right.svg'),
			'chevron-up': formatAssetUrl('icons/chevron-up.svg'),
			'chevrons-ne': formatAssetUrl('icons/chevrons-ne.svg'),
			'chevrons-sw': formatAssetUrl('icons/chevrons-sw.svg'),
			'clipboard-copied': formatAssetUrl('icons/clipboard-copied.svg'),
			'clipboard-copy': formatAssetUrl('icons/clipboard-copy.svg'),
			code: formatAssetUrl('icons/code.svg'),
			collab: formatAssetUrl('icons/collab.svg'),
			color: formatAssetUrl('icons/color.svg'),
			comment: formatAssetUrl('icons/comment.svg'),
			'cross-2': formatAssetUrl('icons/cross-2.svg'),
			cross: formatAssetUrl('icons/cross.svg'),
			'dash-dashed': formatAssetUrl('icons/dash-dashed.svg'),
			'dash-dotted': formatAssetUrl('icons/dash-dotted.svg'),
			'dash-draw': formatAssetUrl('icons/dash-draw.svg'),
			'dash-solid': formatAssetUrl('icons/dash-solid.svg'),
			discord: formatAssetUrl('icons/discord.svg'),
			'distribute-horizontal': formatAssetUrl('icons/distribute-horizontal.svg'),
			'distribute-vertical': formatAssetUrl('icons/distribute-vertical.svg'),
			dot: formatAssetUrl('icons/dot.svg'),
			'dots-horizontal': formatAssetUrl('icons/dots-horizontal.svg'),
			'dots-vertical': formatAssetUrl('icons/dots-vertical.svg'),
			'drag-handle-dots': formatAssetUrl('icons/drag-handle-dots.svg'),
			duplicate: formatAssetUrl('icons/duplicate.svg'),
			edit: formatAssetUrl('icons/edit.svg'),
			'external-link': formatAssetUrl('icons/external-link.svg'),
			file: formatAssetUrl('icons/file.svg'),
			'fill-none': formatAssetUrl('icons/fill-none.svg'),
			'fill-pattern': formatAssetUrl('icons/fill-pattern.svg'),
			'fill-semi': formatAssetUrl('icons/fill-semi.svg'),
			'fill-solid': formatAssetUrl('icons/fill-solid.svg'),
			follow: formatAssetUrl('icons/follow.svg'),
			following: formatAssetUrl('icons/following.svg'),
			'font-draw': formatAssetUrl('icons/font-draw.svg'),
			'font-mono': formatAssetUrl('icons/font-mono.svg'),
			'font-sans': formatAssetUrl('icons/font-sans.svg'),
			'font-serif': formatAssetUrl('icons/font-serif.svg'),
			'geo-arrow-down': formatAssetUrl('icons/geo-arrow-down.svg'),
			'geo-arrow-left': formatAssetUrl('icons/geo-arrow-left.svg'),
			'geo-arrow-right': formatAssetUrl('icons/geo-arrow-right.svg'),
			'geo-arrow-up': formatAssetUrl('icons/geo-arrow-up.svg'),
			'geo-check-box': formatAssetUrl('icons/geo-check-box.svg'),
			'geo-diamond': formatAssetUrl('icons/geo-diamond.svg'),
			'geo-ellipse': formatAssetUrl('icons/geo-ellipse.svg'),
			'geo-hexagon': formatAssetUrl('icons/geo-hexagon.svg'),
			'geo-octagon': formatAssetUrl('icons/geo-octagon.svg'),
			'geo-oval': formatAssetUrl('icons/geo-oval.svg'),
			'geo-pentagon': formatAssetUrl('icons/geo-pentagon.svg'),
			'geo-rectangle': formatAssetUrl('icons/geo-rectangle.svg'),
			'geo-rhombus-2': formatAssetUrl('icons/geo-rhombus-2.svg'),
			'geo-rhombus': formatAssetUrl('icons/geo-rhombus.svg'),
			'geo-star': formatAssetUrl('icons/geo-star.svg'),
			'geo-trapezoid': formatAssetUrl('icons/geo-trapezoid.svg'),
			'geo-triangle': formatAssetUrl('icons/geo-triangle.svg'),
			'geo-x-box': formatAssetUrl('icons/geo-x-box.svg'),
			github: formatAssetUrl('icons/github.svg'),
			group: formatAssetUrl('icons/group.svg'),
			hidden: formatAssetUrl('icons/hidden.svg'),
			image: formatAssetUrl('icons/image.svg'),
			'info-circle': formatAssetUrl('icons/info-circle.svg'),
			leading: formatAssetUrl('icons/leading.svg'),
			link: formatAssetUrl('icons/link.svg'),
			'lock-small': formatAssetUrl('icons/lock-small.svg'),
			lock: formatAssetUrl('icons/lock.svg'),
			menu: formatAssetUrl('icons/menu.svg'),
			minus: formatAssetUrl('icons/minus.svg'),
			mixed: formatAssetUrl('icons/mixed.svg'),
			pack: formatAssetUrl('icons/pack.svg'),
			page: formatAssetUrl('icons/page.svg'),
			plus: formatAssetUrl('icons/plus.svg'),
			'question-mark-circle': formatAssetUrl('icons/question-mark-circle.svg'),
			'question-mark': formatAssetUrl('icons/question-mark.svg'),
			redo: formatAssetUrl('icons/redo.svg'),
			'reset-zoom': formatAssetUrl('icons/reset-zoom.svg'),
			'rotate-ccw': formatAssetUrl('icons/rotate-ccw.svg'),
			'rotate-cw': formatAssetUrl('icons/rotate-cw.svg'),
			ruler: formatAssetUrl('icons/ruler.svg'),
			search: formatAssetUrl('icons/search.svg'),
			'send-backward': formatAssetUrl('icons/send-backward.svg'),
			'send-to-back': formatAssetUrl('icons/send-to-back.svg'),
			'settings-horizontal': formatAssetUrl('icons/settings-horizontal.svg'),
			'settings-vertical-1': formatAssetUrl('icons/settings-vertical-1.svg'),
			'settings-vertical': formatAssetUrl('icons/settings-vertical.svg'),
			'share-1': formatAssetUrl('icons/share-1.svg'),
			'share-2': formatAssetUrl('icons/share-2.svg'),
			'size-extra-large': formatAssetUrl('icons/size-extra-large.svg'),
			'size-large': formatAssetUrl('icons/size-large.svg'),
			'size-medium': formatAssetUrl('icons/size-medium.svg'),
			'size-small': formatAssetUrl('icons/size-small.svg'),
			'spline-cubic': formatAssetUrl('icons/spline-cubic.svg'),
			'spline-line': formatAssetUrl('icons/spline-line.svg'),
			'stack-horizontal': formatAssetUrl('icons/stack-horizontal.svg'),
			'stack-vertical': formatAssetUrl('icons/stack-vertical.svg'),
			'stretch-horizontal': formatAssetUrl('icons/stretch-horizontal.svg'),
			'stretch-vertical': formatAssetUrl('icons/stretch-vertical.svg'),
			'text-align-center': formatAssetUrl('icons/text-align-center.svg'),
			'text-align-justify': formatAssetUrl('icons/text-align-justify.svg'),
			'text-align-left': formatAssetUrl('icons/text-align-left.svg'),
			'text-align-right': formatAssetUrl('icons/text-align-right.svg'),
			'tool-arrow': formatAssetUrl('icons/tool-arrow.svg'),
			'tool-embed': formatAssetUrl('icons/tool-embed.svg'),
			'tool-eraser': formatAssetUrl('icons/tool-eraser.svg'),
			'tool-frame': formatAssetUrl('icons/tool-frame.svg'),
			'tool-hand': formatAssetUrl('icons/tool-hand.svg'),
			'tool-highlighter': formatAssetUrl('icons/tool-highlighter.svg'),
			'tool-laser': formatAssetUrl('icons/tool-laser.svg'),
			'tool-line': formatAssetUrl('icons/tool-line.svg'),
			'tool-media': formatAssetUrl('icons/tool-media.svg'),
			'tool-note': formatAssetUrl('icons/tool-note.svg'),
			'tool-pencil': formatAssetUrl('icons/tool-pencil.svg'),
			'tool-pointer': formatAssetUrl('icons/tool-pointer.svg'),
			'tool-text': formatAssetUrl('icons/tool-text.svg'),
			trash: formatAssetUrl('icons/trash.svg'),
			'triangle-down': formatAssetUrl('icons/triangle-down.svg'),
			'triangle-up': formatAssetUrl('icons/triangle-up.svg'),
			twitter: formatAssetUrl('icons/twitter.svg'),
			undo: formatAssetUrl('icons/undo.svg'),
			ungroup: formatAssetUrl('icons/ungroup.svg'),
			'unlock-small': formatAssetUrl('icons/unlock-small.svg'),
			unlock: formatAssetUrl('icons/unlock.svg'),
			'vertical-align-center': formatAssetUrl('icons/vertical-align-center.svg'),
			'vertical-align-end': formatAssetUrl('icons/vertical-align-end.svg'),
			'vertical-align-start': formatAssetUrl('icons/vertical-align-start.svg'),
			visible: formatAssetUrl('icons/visible.svg'),
			'warning-triangle': formatAssetUrl('icons/warning-triangle.svg'),
			'zoom-in': formatAssetUrl('icons/zoom-in.svg'),
			'zoom-out': formatAssetUrl('icons/zoom-out.svg'),
		},
		translations: {
			en: formatAssetUrl('lang/tldraw-en.json'),
		},
    }
}
