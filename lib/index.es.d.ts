/// <reference types="react" />
/// <reference types="styled-system" />
/// <reference types="styled-components" />
import React from "react";
import { FC, ReactNode, ComponentType, AnchorHTMLAttributes, CSSProperties, DOMAttributes, ImgHTMLAttributes, MutableRefObject } from "react";
import * as CSS from "csstype";
import { ResponsiveValue } from "@styled-system/core";
import system from "styled-system";
type IconProps = IconBaseProps & {
    svg?: ReactNode;
};
type ExtendedIconProps = IconProps;
declare const Icon: FC<ExtendedIconProps>;
type Renderable = ReactNode | ComponentType;
type SideComplementProps = {
    _icon?: IconProps;
    icon?: Renderable;
    element?: Renderable;
};
type ComplementProps = {
    _leftIcon?: IconProps;
    leftIcon?: Renderable;
    leftElement?: Renderable;
    _rightIcon?: IconProps;
    rightIcon?: Renderable;
    rightElement?: Renderable;
};
type SpinnerProps = {
    speed?: string;
} & BoxBaseProps;
declare const Spinner: FC<SpinnerProps>;
type ButtonProps = {
    _spinner?: SpinnerProps;
    textTransform?: ResponsiveValue<CSS.TextTransformProperty>;
} & ComplementProps & FlexBaseProps & TextBaseProps;
type ExtendedButtonProps = ButtonProps & {
    loading?: boolean;
    disabled?: boolean;
    size?: ButtonSize;
    s?: ButtonSize;
    variant?: ButtonVariant;
    v?: ButtonVariant;
    children?: ReactNode;
} & ({
    as?: "button" | "div";
} | ({
    as: "a";
} & AnchorHTMLAttributes<unknown>));
declare const Button: React.ForwardRefExoticComponent<({
    _spinner?: SpinnerProps | undefined;
    textTransform?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
    } | null | undefined;
} & ComplementProps & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & {
    _hover?: BoxBaseProps | undefined;
    _active?: BoxBaseProps | undefined;
    _focus?: BoxBaseProps | undefined;
    _before?: PseudoBoxBaseProps | undefined;
    _after?: PseudoBoxBaseProps | undefined;
    _disabled?: BoxBaseProps | undefined;
    _groupHover?: BoxBaseProps | undefined;
    _groupHoverIcon?: IconBaseProps | undefined;
    _placeholder?: BoxBaseProps | undefined;
    _selection?: SelectionBaseProps | undefined;
    _focusWithin?: BoxBaseProps | undefined;
    _first?: BoxBaseProps | undefined;
    _firstOfType?: BoxBaseProps | undefined;
    _last?: BoxBaseProps | undefined;
    _group?: {
        _hover?: BoxBaseProps | undefined;
        _focus?: BoxBaseProps | undefined;
        _active?: BoxBaseProps | undefined;
    } | undefined;
    _icon?: IconBaseProps | undefined;
    color?: string | undefined;
    cursor?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    animation?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transition?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    outline?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    outlineOffset?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transform?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    filter?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    placeSelf?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    userSelect?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    pointerEvents?: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | ("fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | null)[] | {
        [x: string]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
        [x: number]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
    } | null | undefined;
    column?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    row?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    theme?: XcoreTheme | undefined;
} & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").BoxShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & Pick<import("styled-system").LayoutProps<Required<import("styled-system").Theme<React.ReactText>>>, "display" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflowX" | "overflowY" | "verticalAlign" | "width" | "overflow"> & import("styled-system").PositionProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").GridColumnProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").GridRowProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").ZIndexProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").JustifySelfProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").AlignSelfProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<React.DOMAttributes<HTMLElement>, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & {
    whiteSpace?: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | ("pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | null)[] | {
        [x: string]: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
        [x: number]: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
    } | null | undefined;
    wordBreak?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | undefined;
    } | null | undefined;
    textDecoration?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    textOverflow?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    textTransform?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
    } | null | undefined;
    WebkitLineClamp?: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | (number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | null)[] | {
        [x: string]: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | undefined;
        [x: number]: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | undefined;
    } | null | undefined;
    WebkitBoxOrient?: ResponsiveValue<"-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-axis" | "horizontal" | "inline-axis" | "vertical" | undefined, Required<import("@styled-system/core").Theme<any>>>;
} & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").TextShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & {
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    s?: "xs" | "sm" | "md" | "lg" | undefined;
    variant?: "link" | "clear" | "outline" | "solid" | undefined;
    v?: "link" | "clear" | "outline" | "solid" | undefined;
    children?: React.ReactNode;
} & {
    as?: "button" | "div" | undefined;
} & React.RefAttributes<HTMLDivElement>) | ({
    _spinner?: SpinnerProps | undefined;
    textTransform?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
    } | null | undefined;
} & ComplementProps & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & {
    _hover?: BoxBaseProps | undefined;
    _active?: BoxBaseProps | undefined;
    _focus?: BoxBaseProps | undefined;
    _before?: PseudoBoxBaseProps | undefined;
    _after?: PseudoBoxBaseProps | undefined;
    _disabled?: BoxBaseProps | undefined;
    _groupHover?: BoxBaseProps | undefined;
    _groupHoverIcon?: IconBaseProps | undefined;
    _placeholder?: BoxBaseProps | undefined;
    _selection?: SelectionBaseProps | undefined;
    _focusWithin?: BoxBaseProps | undefined;
    _first?: BoxBaseProps | undefined;
    _firstOfType?: BoxBaseProps | undefined;
    _last?: BoxBaseProps | undefined;
    _group?: {
        _hover?: BoxBaseProps | undefined;
        _focus?: BoxBaseProps | undefined;
        _active?: BoxBaseProps | undefined;
    } | undefined;
    _icon?: IconBaseProps | undefined;
    color?: string | undefined;
    cursor?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    animation?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transition?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    outline?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    outlineOffset?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transform?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    filter?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    placeSelf?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    userSelect?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    pointerEvents?: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | ("fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | null)[] | {
        [x: string]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
        [x: number]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
    } | null | undefined;
    column?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    row?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    theme?: XcoreTheme | undefined;
} & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").BoxShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & Pick<import("styled-system").LayoutProps<Required<import("styled-system").Theme<React.ReactText>>>, "display" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflowX" | "overflowY" | "verticalAlign" | "width" | "overflow"> & import("styled-system").PositionProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").GridColumnProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").GridRowProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").ZIndexProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").JustifySelfProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").AlignSelfProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<React.DOMAttributes<HTMLElement>, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & {
    whiteSpace?: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | ("pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | null)[] | {
        [x: string]: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
        [x: number]: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
    } | null | undefined;
    wordBreak?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | undefined;
    } | null | undefined;
    textDecoration?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    textOverflow?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    textTransform?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
    } | null | undefined;
    WebkitLineClamp?: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | (number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | null)[] | {
        [x: string]: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | undefined;
        [x: number]: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | undefined;
    } | null | undefined;
    WebkitBoxOrient?: ResponsiveValue<"-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-axis" | "horizontal" | "inline-axis" | "vertical" | undefined, Required<import("@styled-system/core").Theme<any>>>;
} & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").TextShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & {
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    s?: "xs" | "sm" | "md" | "lg" | undefined;
    variant?: "link" | "clear" | "outline" | "solid" | undefined;
    v?: "link" | "clear" | "outline" | "solid" | undefined;
    children?: React.ReactNode;
} & {
    as: "a";
} & React.AnchorHTMLAttributes<unknown> & React.RefAttributes<HTMLDivElement>)>;
type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonVariant = "solid" | "clear" | "outline" | "link";
type ButtonAs = "button" | "div" | "a";
interface ButtonValue {
    default: ButtonProps;
    sizes: Record<ButtonSize, ButtonProps>;
    variants: Record<ButtonVariant, ButtonProps>;
}
interface ButtonTheme {
    button: ButtonValue;
}
declare const button: (b?: {
    default?: ButtonProps | undefined;
    sizes?: Partial<Record<ButtonSize, ButtonProps>> | undefined;
    variants?: Partial<Record<ButtonVariant, ButtonProps>> | undefined;
} | undefined) => ButtonTheme;
type FlexProps = FlexBaseProps;
type ExtendedFlexProps = FlexProps;
declare const Flex: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FlexBaseProps, never>;
type TagVariant = "solid" | "outline" | "clear";
interface TagValue {
    default: TagProps;
    variants: Record<TagVariant, TagProps>;
}
interface TagTheme {
    tag: TagValue;
}
declare const tag: (t?: {
    default?: TagProps | undefined;
    variants?: Partial<Record<TagVariant, TagProps>> | undefined;
} | undefined) => TagTheme;
type TagProps = ComplementProps & FlexBaseProps & TextBaseProps;
type ExtendedTagProps = {
    variant?: TagVariant;
    v?: TagVariant;
} & TagProps;
declare const Tag: FC<ExtendedTagProps>;
type TextVariant = "span" | "em" | "strong" | "underline" | "abbr" | "strikethrough" | "sub" | "sup";
type TextAs = "span" | "em" | "strong" | "u" | "abbr" | "s" | "sub" | "sup" | "time";
interface TextValue {
    default: TextProps;
    variants: Record<TextVariant, TextProps>;
}
interface TextTheme {
    text: TextValue;
}
declare const text: (t?: {
    default?: TextBaseProps | undefined;
    variants?: Partial<Record<TextVariant, TextBaseProps>> | undefined;
} | undefined) => TextTheme;
type TextProps = TextBaseProps;
interface ExtendedTextProps extends TextProps {
    v?: TextVariant;
    variant?: TextVariant;
    as?: TextAs;
    children?: ReactNode;
}
declare const Text: React.ForwardRefExoticComponent<ExtendedTextProps & React.RefAttributes<HTMLSpanElement>>;
type CardProps = {
    header?: Renderable;
    _header?: FlexProps;
    title?: Renderable;
    _title?: TextProps;
    tag?: Renderable;
    _tag?: TagProps;
    media?: Renderable;
    _media?: FlexProps;
    body?: Renderable;
    _body?: FlexProps;
    footer?: Renderable;
    _footer?: FlexProps;
    innerPadding?: ResponsiveValue<CSS.PaddingProperty<number>>;
} & BoxProps;
type ExtendedCardProps = {
    v?: CardVariant;
    variant?: CardVariant;
    children?: ReactNode;
} & CardProps;
declare const Card: React.ForwardRefExoticComponent<{
    v?: "outline" | "normal" | "elevated" | undefined;
    variant?: "outline" | "normal" | "elevated" | undefined;
    children?: React.ReactNode;
} & {
    header?: Renderable;
    _header?: FlexBaseProps | undefined;
    title?: Renderable;
    _title?: TextBaseProps | undefined;
    tag?: Renderable;
    _tag?: TagProps | undefined;
    media?: Renderable;
    _media?: FlexBaseProps | undefined;
    body?: Renderable;
    _body?: FlexBaseProps | undefined;
    footer?: Renderable;
    _footer?: FlexBaseProps | undefined;
    innerPadding?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
} & {
    _hover?: BoxBaseProps | undefined;
    _active?: BoxBaseProps | undefined;
    _focus?: BoxBaseProps | undefined;
    _before?: PseudoBoxBaseProps | undefined;
    _after?: PseudoBoxBaseProps | undefined;
    _disabled?: BoxBaseProps | undefined;
    _groupHover?: BoxBaseProps | undefined;
    _groupHoverIcon?: IconBaseProps | undefined;
    _placeholder?: BoxBaseProps | undefined;
    _selection?: SelectionBaseProps | undefined;
    _focusWithin?: BoxBaseProps | undefined;
    _first?: BoxBaseProps | undefined;
    _firstOfType?: BoxBaseProps | undefined;
    _last?: BoxBaseProps | undefined;
    _group?: {
        _hover?: BoxBaseProps | undefined;
        _focus?: BoxBaseProps | undefined;
        _active?: BoxBaseProps | undefined;
    } | undefined;
    _icon?: IconBaseProps | undefined;
    color?: string | undefined;
    cursor?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    animation?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transition?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    outline?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    outlineOffset?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transform?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    filter?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    placeSelf?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    userSelect?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    pointerEvents?: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | ("fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | null)[] | {
        [x: string]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
        [x: number]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
    } | null | undefined;
    column?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    row?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    theme?: XcoreTheme | undefined;
} & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").BoxShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & Pick<import("styled-system").LayoutProps<Required<import("styled-system").Theme<React.ReactText>>>, "display" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflowX" | "overflowY" | "verticalAlign" | "width" | "overflow"> & import("styled-system").PositionProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").GridColumnProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").GridRowProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").ZIndexProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").JustifySelfProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").AlignSelfProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<React.DOMAttributes<HTMLElement>, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLDivElement>>;
type CardVariant = "normal" | "elevated" | "outline";
interface CardValue {
    default: CardProps;
    variants: Record<CardVariant, CardProps>;
}
interface CardTheme {
    card: CardValue;
}
declare const card: (c?: {
    default?: CardProps | undefined;
    variants?: Partial<Record<CardVariant, CardProps>> | undefined;
} | undefined) => CardTheme;
type ContainerValue = {
    default: FlexProps;
    variants: Record<ContainerVariant, FlexProps>;
};
type ContainerVariant = "normal" | "fluid";
interface ContainerTheme {
    container: ContainerValue;
}
declare const container: (c?: {
    default?: FlexBaseProps | undefined;
    variants?: Partial<Record<ContainerVariant, FlexBaseProps>> | undefined;
} | undefined) => ContainerTheme;
type LinkProps = TextBaseProps & AnchorHTMLAttributes<HTMLAnchorElement | HTMLSpanElement>;
type ExtendedLinkProps = {
    as?: LinkAs;
    variant?: LinkVariant;
    v?: LinkVariant;
    children?: ReactNode;
} & LinkProps;
declare const Link: React.ForwardRefExoticComponent<{
    as?: "a" | "span" | undefined;
    variant?: "underline" | "simple" | undefined;
    v?: "underline" | "simple" | undefined;
    children?: React.ReactNode;
} & {
    whiteSpace?: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | ("pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | null)[] | {
        [x: string]: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
        [x: number]: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
    } | null | undefined;
    wordBreak?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | undefined;
    } | null | undefined;
    textDecoration?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    textOverflow?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    textTransform?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
    } | null | undefined;
    WebkitLineClamp?: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | (number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | null)[] | {
        [x: string]: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | undefined;
        [x: number]: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | undefined;
    } | null | undefined;
    WebkitBoxOrient?: import("@styled-system/core").ResponsiveValue<"-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-axis" | "horizontal" | "inline-axis" | "vertical" | undefined, Required<import("@styled-system/core").Theme<any>>>;
} & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").TextShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & {
    _hover?: BoxBaseProps | undefined;
    _active?: BoxBaseProps | undefined;
    _focus?: BoxBaseProps | undefined;
    _before?: PseudoBoxBaseProps | undefined;
    _after?: PseudoBoxBaseProps | undefined;
    _disabled?: BoxBaseProps | undefined;
    _groupHover?: BoxBaseProps | undefined;
    _groupHoverIcon?: IconBaseProps | undefined;
    _placeholder?: BoxBaseProps | undefined;
    _selection?: SelectionBaseProps | undefined;
    _focusWithin?: BoxBaseProps | undefined;
    _first?: BoxBaseProps | undefined;
    _firstOfType?: BoxBaseProps | undefined;
    _last?: BoxBaseProps | undefined;
    _group?: {
        _hover?: BoxBaseProps | undefined;
        _focus?: BoxBaseProps | undefined;
        _active?: BoxBaseProps | undefined;
    } | undefined;
    _icon?: IconBaseProps | undefined;
    color?: string | undefined;
    cursor?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    animation?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transition?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    outline?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    outlineOffset?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transform?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    filter?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    placeSelf?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    userSelect?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    pointerEvents?: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | ("fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | null)[] | {
        [x: string]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
        [x: number]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
    } | null | undefined;
    column?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    row?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    theme?: XcoreTheme | undefined;
} & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").BoxShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & Pick<import("styled-system").LayoutProps<Required<import("styled-system").Theme<React.ReactText>>>, "display" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflowX" | "overflowY" | "verticalAlign" | "width" | "overflow"> & import("styled-system").PositionProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").GridColumnProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").GridRowProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").ZIndexProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").JustifySelfProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").AlignSelfProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<React.DOMAttributes<HTMLElement>, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> & React.RefAttributes<HTMLAnchorElement>>;
type LinkVariant = "underline" | "simple";
type LinkAs = "a" | "span";
interface LinkValue {
    default: LinkProps;
    variants: Record<LinkVariant, LinkProps>;
}
interface LinkTheme {
    link: LinkValue;
}
declare const link: (l?: {
    default?: LinkProps | undefined;
    variants?: Partial<Record<LinkVariant, LinkProps>> | undefined;
} | undefined) => LinkTheme;
type ListProps = {
    counterReset?: ResponsiveValue<CSS.CounterResetProperty>;
    _items?: {
        paddingLeft?: ResponsiveValue<CSS.PaddingLeftProperty<TLen>>;
        marginBottom?: ResponsiveValue<CSS.MarginBottomProperty<TLen>>;
        color?: ResponsiveValue<string>;
        fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLen>>;
        lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLen>>;
        counterIncrement?: ResponsiveValue<CSS.CounterIncrementProperty>;
    };
    _bullet?: {
        content?: ResponsiveValue<CSS.ContentProperty>;
        position?: ResponsiveValue<CSS.PositionProperty>;
        color?: ResponsiveValue<string>;
        marginRight?: ResponsiveValue<CSS.MarginRightProperty<TLen>>;
        width?: ResponsiveValue<CSS.WidthProperty<TLen>>;
        fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLen>>;
        lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLen>>;
    };
} & TextBaseProps;
type ExtendedListProps = {
    variant?: ListVariant;
    v?: ListVariant;
    as?: "ul" | "ol";
} & ListProps;
declare const List: FC<ExtendedListProps>;
type ListVariant = "ordered" | "unordered";
interface ListValue {
    default: ListProps;
    variants: Record<ListVariant, ListProps>;
}
interface ListTheme {
    list: ListValue;
}
declare const list: (l?: {
    default?: ListProps | undefined;
    variants?: Partial<Record<ListVariant, ListProps>> | undefined;
} | undefined) => ListTheme;
interface TypographyValue {
    default: TextProps;
    variants: Record<TypographyVariant, TextProps>;
}
type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead";
type TypographyAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
interface TypographyTheme {
    typography: TypographyValue;
}
declare const typography: (t?: {
    default?: TextBaseProps | undefined;
    variants?: Partial<Record<TypographyVariant, TextBaseProps>> | undefined;
} | undefined) => {
    typography: {
        variants: Record<string, TextBaseProps>;
    } & {
        default: TextBaseProps;
    };
};
type GlobalValue = {
    _html: GlobalBaseProps;
    _body: GlobalBaseProps;
    _all: GlobalBaseProps;
    _selection: SelectionBaseProps;
};
interface GlobalTheme {
    global: GlobalValue;
}
declare const global: (g?: Partial<GlobalValue>) => GlobalTheme;
type Scale<TValue, TKey extends string = string> = TValue[] & Record<TKey, TValue> & {
    aliases: TKey[];
};
type Breakpoints = Scale<string>;
type BreakpointScale = {
    breakpoints: Breakpoints;
};
declare const breakpoints: (b?: string[], aliases?: string[]) => {
    breakpoints: Scale<string, string>;
};
type Colors = {
    primary: string;
    text: string;
    background: string;
};
type ColorScale = {
    colors: Colors;
};
declare const colors: <T extends {}>(base?: Colors, c?: T & Partial<Colors>) => {
    colors: Colors & T;
};
declare const lightColorTheme: Colors;
declare const darkColorTheme: Colors;
declare const darken: (color: string, amount: number) => string;
declare const lighten: (color: string, amount: number) => string;
declare const opacify: (color: string, amount: number) => string;
declare const transparentize: (color: string, amount: number) => string;
declare const saturate: (color: string, amount: number) => string;
declare const desaturate: (color: string, amount: number) => string;
declare const shade: (color: string, amount: number) => string;
declare const tint: (color: string, amount: number) => string;
declare const adjustHue: (color: string, amount: number) => string;
type Fonts = {
    heading: string;
    text: string;
};
type FontScale = {
    fonts: Fonts;
};
declare const fonts: <T extends Fonts>(f?: Partial<T>) => {
    fonts: T;
};
type Scales = ColorScale & FontScale & BreakpointScale;
declare const createScales: (scale?: Partial<Scales>) => Scales;
type CloseControlProps = {
    _icon?: IconProps;
} & FlexProps;
type ExtendedCloseControlProps = {
    size?: CloseControlSizes;
    s?: CloseControlSizes;
} & CloseControlProps;
declare const CloseControl: React.ForwardRefExoticComponent<{
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    s?: "xs" | "sm" | "md" | "lg" | undefined;
} & {
    _icon?: IconProps | undefined;
} & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & {
    _hover?: BoxBaseProps | undefined;
    _active?: BoxBaseProps | undefined;
    _focus?: BoxBaseProps | undefined;
    _before?: PseudoBoxBaseProps | undefined;
    _after?: PseudoBoxBaseProps | undefined;
    _disabled?: BoxBaseProps | undefined;
    _groupHover?: BoxBaseProps | undefined;
    _groupHoverIcon?: IconBaseProps | undefined;
    _placeholder?: BoxBaseProps | undefined;
    _selection?: SelectionBaseProps | undefined;
    _focusWithin?: BoxBaseProps | undefined;
    _first?: BoxBaseProps | undefined;
    _firstOfType?: BoxBaseProps | undefined;
    _last?: BoxBaseProps | undefined;
    _group?: {
        _hover?: BoxBaseProps | undefined;
        _focus?: BoxBaseProps | undefined;
        _active?: BoxBaseProps | undefined;
    } | undefined;
    _icon?: IconBaseProps | undefined;
    color?: string | undefined;
    cursor?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    animation?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transition?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    outline?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    outlineOffset?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transform?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    filter?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    placeSelf?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    userSelect?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    pointerEvents?: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | ("fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | null)[] | {
        [x: string]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
        [x: number]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
    } | null | undefined;
    column?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    row?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    theme?: XcoreTheme | undefined;
} & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").BoxShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & Pick<import("styled-system").LayoutProps<Required<import("styled-system").Theme<React.ReactText>>>, "display" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflowX" | "overflowY" | "verticalAlign" | "width" | "overflow"> & import("styled-system").PositionProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").GridColumnProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").GridRowProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").ZIndexProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").JustifySelfProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").AlignSelfProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<React.DOMAttributes<HTMLElement>, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLDivElement>>;
type CloseControlSizes = "xs" | "sm" | "md" | "lg";
interface CloseControlValue {
    default: CloseControlProps;
    sizes: Record<CloseControlSizes, CloseControlProps>;
}
interface CloseControlTheme {
    closeControl: CloseControlValue;
}
declare const closeControl: (c?: {
    default: Partial<CloseControlProps>;
    sizes?: Partial<Record<ButtonSize, CloseControlProps>> | undefined;
} | undefined) => CloseControlTheme;
type TypographyProps = TextBaseProps;
type ExtendedTypographyProps = {
    variant?: TypographyVariant;
    v?: TypographyVariant;
    as?: TypographyAs;
} & TypographyProps;
declare const Typography: FC<ExtendedTypographyProps>;
type ModalProps = {
    title?: Renderable;
    _title?: ExtendedTypographyProps;
    header?: Renderable;
    _header?: BoxProps;
    _close?: CloseControlProps;
    _overlay?: ExtendedFlexProps;
} & FlexProps;
type ExtendedModalProps = {
    s?: ModalSize;
    size?: ModalSize;
    onClose?: () => unknown;
} & ModalProps;
declare const Modal: FC<ExtendedModalProps>;
type ModalSize = "sm" | "md" | "lg" | "full";
interface ModalValue {
    default: ModalProps;
    sizes: Record<ModalSize, ModalProps>;
}
interface ModalTheme {
    modal: ModalValue;
}
declare const modal: (m?: {
    default?: ModalProps | undefined;
    sizes: Partial<Record<ModalSize, ModalProps>>;
} | undefined) => ModalTheme;
interface XcoreThemeBase {
    name: string;
}
type XcoreTheme = Scales & XcoreThemeBase & GlobalTheme & ContainerTheme & TextTheme & ButtonTheme & TypographyTheme & LinkTheme & TagTheme & CardTheme & ListTheme & CloseControlTheme & ModalTheme;
declare const createTheme: (theme?: Partial<XcoreTheme>) => XcoreTheme;
type TLen = string | 0 | number;
type SelectionBaseProps = {
    color?: ResponsiveValue<string>;
    cursor?: ResponsiveValue<CSS.CursorProperty>;
    caretColor?: ResponsiveValue<CSS.CaretColorProperty>;
    outline?: ResponsiveValue<CSS.OutlineProperty<TLen>>;
    outlineOffset?: ResponsiveValue<CSS.OutlineOffsetProperty<TLen>>;
    textDecoration?: ResponsiveValue<CSS.TextDecorationProperty<TLen>>;
    textEmphasisColor?: ResponsiveValue<CSS.TextEmphasisColorProperty>;
    theme?: XcoreTheme;
} & system.BackgroundColorProps & system.TextShadowProps;
type BoxBaseProps = {
    _hover?: BoxBaseProps;
    _active?: BoxBaseProps;
    _focus?: BoxBaseProps;
    _before?: PseudoBoxBaseProps;
    _after?: PseudoBoxBaseProps;
    _disabled?: BoxBaseProps;
    _groupHover?: BoxBaseProps;
    _groupHoverIcon?: IconBaseProps;
    _placeholder?: BoxBaseProps;
    _selection?: SelectionBaseProps;
    _focusWithin?: BoxBaseProps;
    _first?: BoxBaseProps;
    _firstOfType?: BoxBaseProps;
    _last?: BoxBaseProps;
    _group?: {
        _hover?: BoxBaseProps;
        _focus?: BoxBaseProps;
        _active?: BoxBaseProps;
    };
    _icon?: IconBaseProps;
    color?: string;
    cursor?: ResponsiveValue<CSS.CursorProperty>;
    animation?: ResponsiveValue<CSS.AnimationProperty>;
    transition?: ResponsiveValue<CSS.TransitionProperty>;
    outline?: ResponsiveValue<CSS.OutlineProperty<TLen>>;
    outlineOffset?: ResponsiveValue<CSS.OutlineOffsetProperty<TLen>>;
    transform?: ResponsiveValue<CSS.TransformProperty>;
    filter?: ResponsiveValue<CSS.FilterProperty>;
    placeSelf?: ResponsiveValue<CSS.PlaceSelfProperty>;
    userSelect?: system.ResponsiveValue<CSS.CursorProperty>;
    pointerEvents?: system.ResponsiveValue<CSS.PointerEventsProperty>;
    // Aliases
    column?: ResponsiveValue<CSS.GridColumnProperty>;
    row?: ResponsiveValue<CSS.GridRowProperty>;
    theme?: XcoreTheme;
} & system.TypographyProps & system.FlexboxProps & system.BorderProps & system.BoxShadowProps & Omit<system.ColorProps, "color"> & Omit<system.LayoutProps, "size"> & system.PositionProps & system.SpaceProps & system.BackgroundProps & system.GridColumnProps & system.GridRowProps & system.ZIndexProps & system.JustifySelfProps & system.AlignSelfProps & Omit<DOMAttributes<HTMLElement>, "children" | "dangerouslySetInnerHTML">;
type PseudoBoxBaseProps = {
    content?: ResponsiveValue<CSS.ContentProperty>;
} & BoxBaseProps;
type GlobalBaseProps = {
    webkitFontSmoothing?: ResponsiveValue<string>;
    boxSizing?: ResponsiveValue<CSS.BoxSizingProperty>;
} & BoxBaseProps;
type FlexBaseProps = system.FlexboxProps & BoxBaseProps;
type IconBaseProps = {
    fill?: string;
    fillHover?: string;
} & FlexBaseProps;
type TextBaseProps = {
    whiteSpace?: ResponsiveValue<CSS.WhiteSpaceProperty>;
    wordBreak?: ResponsiveValue<CSS.WordBreakProperty>;
    textDecoration?: ResponsiveValue<CSS.TextDecorationProperty<TLen>>;
    textOverflow?: ResponsiveValue<CSS.TextOverflowProperty>;
    textTransform?: ResponsiveValue<CSS.TextTransformProperty>;
    WebkitLineClamp?: ResponsiveValue<CSS.WebkitLineClampProperty>;
    WebkitBoxOrient?: ResponsiveValue<CSSProperties["WebkitBoxOrient"]>;
} & Omit<system.ColorProps, "color"> & system.TypographyProps & system.TextShadowProps & BoxBaseProps;
type BoxProps = BoxBaseProps;
declare const Box: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BoxBaseProps, never>;
declare const ActiveBreakpoint: FC<BoxProps>;
type AspectRatioProps = {
    ratio: number;
} & BoxBaseProps;
declare const AspectRatio: FC<AspectRatioProps>;
type CollapseProps = {
    open?: boolean;
    start?: number;
    end?: number;
} & BoxProps;
declare const Collapse: FC<CollapseProps>;
type ImgProps = {
    src: string;
    alt: string;
    objectFit?: ResponsiveValue<CSS.ObjectFitProperty>;
} & ImgHTMLAttributes<HTMLImageElement> & BoxProps;
declare const Img: FC<ImgProps>;
type LoremIpsumProps = {
    count?: number;
    units?: "paragraphs" | "words" | "sentences";
    random?: boolean;
} & TextProps;
declare const LoremIpsum: React.ForwardRefExoticComponent<{
    count?: number | undefined;
    units?: "paragraphs" | "words" | "sentences" | undefined;
    random?: boolean | undefined;
} & {
    whiteSpace?: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | ("pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | null)[] | {
        [x: string]: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
        [x: number]: "pre" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "-moz-pre-wrap" | "break-spaces" | "nowrap" | "pre-line" | "pre-wrap" | undefined;
    } | null | undefined;
    wordBreak?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "break-all" | "break-word" | "keep-all" | undefined;
    } | null | undefined;
    textDecoration?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    textOverflow?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    textTransform?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | null)[] | {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
        [x: number]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase" | undefined;
    } | null | undefined;
    WebkitLineClamp?: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | (number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | null)[] | {
        [x: string]: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | undefined;
        [x: number]: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | undefined;
    } | null | undefined;
    WebkitBoxOrient?: import("@styled-system/core").ResponsiveValue<"-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-axis" | "horizontal" | "inline-axis" | "vertical" | undefined, Required<import("@styled-system/core").Theme<any>>>;
} & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").TextShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & {
    _hover?: BoxBaseProps | undefined;
    _active?: BoxBaseProps | undefined;
    _focus?: BoxBaseProps | undefined;
    _before?: PseudoBoxBaseProps | undefined;
    _after?: PseudoBoxBaseProps | undefined;
    _disabled?: BoxBaseProps | undefined;
    _groupHover?: BoxBaseProps | undefined;
    _groupHoverIcon?: IconBaseProps | undefined;
    _placeholder?: BoxBaseProps | undefined;
    _selection?: SelectionBaseProps | undefined;
    _focusWithin?: BoxBaseProps | undefined;
    _first?: BoxBaseProps | undefined;
    _firstOfType?: BoxBaseProps | undefined;
    _last?: BoxBaseProps | undefined;
    _group?: {
        _hover?: BoxBaseProps | undefined;
        _focus?: BoxBaseProps | undefined;
        _active?: BoxBaseProps | undefined;
    } | undefined;
    _icon?: IconBaseProps | undefined;
    color?: string | undefined;
    cursor?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    animation?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transition?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    outline?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    outlineOffset?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transform?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    filter?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    placeSelf?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    userSelect?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    pointerEvents?: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | ("fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | null)[] | {
        [x: string]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
        [x: number]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
    } | null | undefined;
    column?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    row?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    theme?: XcoreTheme | undefined;
} & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").BoxShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & Pick<import("styled-system").LayoutProps<Required<import("styled-system").Theme<React.ReactText>>>, "display" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflowX" | "overflowY" | "verticalAlign" | "width" | "overflow"> & import("styled-system").PositionProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").GridColumnProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").GridRowProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").ZIndexProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").JustifySelfProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").AlignSelfProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<React.DOMAttributes<HTMLElement>, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLSpanElement>>;
type Col = CSS.GridTemplateColumnsProperty<string>;
type GridColumnResponsiveValue = Col | null | Array<Col | null> | {
    [key in string | number]?: Col;
};
type GridProps = {
    columns: GridColumnResponsiveValue;
    rows: ResponsiveValue<CSS.GridTemplateRowsProperty<string>>;
    gap?: ResponsiveValue<CSS.GapProperty<string>>;
} & GridPositionProps & BoxBaseProps;
type GridPositionProps = {
    justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>;
    justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>;
    alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
    alignContent?: ResponsiveValue<CSS.AlignContentProperty>;
};
type ExtendedGridProps = GridProps;
declare const Grid: FC<ExtendedGridProps>;
type ColumnResponsiveValue = number | null | Array<number | null> | ({
    [key in string | number]?: number;
} & {
    _: number;
});
type SimpleGridProps = {
    columns: ColumnResponsiveValue;
    unit?: ResponsiveValue<string>;
    gap?: ResponsiveValue<CSS.GapProperty<string>>;
} & GridPositionProps & BoxProps;
declare const SimpleGrid: FC<SimpleGridProps>;
interface StackProps extends FlexProps {
    direction?: ResponsiveValue<"column" | "row">;
    dir?: ResponsiveValue<"column" | "row">;
    gap?: ResponsiveValue<number | string>;
    wrapItems?: boolean;
    children: ReactNode;
    align?: FlexProps["alignItems"];
    justify?: FlexProps["justifyContent"];
    wrap?: FlexProps["flexWrap"];
}
type ExtendedStackProps = StackProps;
declare const Stack: FC<StackProps>;
type CellProps = BoxBaseProps;
type ExtendedCellProps = CellProps;
declare const Cell: FC<CellProps>;
type VerticalPosition = "top" | "center" | "bottom" | "stretch";
type HorizontalPosition = "left" | "center" | "right" | "stretch";
type InsetBoxProps = {
    horizontalPosition?: ResponsiveValue<HorizontalPosition>;
    h?: ResponsiveValue<HorizontalPosition>;
    verticalPosition?: VerticalPosition;
    v?: VerticalPosition;
    target?: MutableRefObject<HTMLElement>;
} & BoxProps;
declare const InsetBox: FC<InsetBoxProps>;
type OutsetBoxTarget = MutableRefObject<Element> | Element;
type OutsetBoxProps = {
    horizontalPosition?: ResponsiveValue<HorizontalPosition>;
    h?: ResponsiveValue<HorizontalPosition>;
    verticalPosition?: VerticalPosition;
    v?: VerticalPosition;
    target: OutsetBoxTarget;
} & BoxProps;
declare const OutsetBox: FC<OutsetBoxProps>;
type ContainerProps = FlexProps;
type ExtendedContainerProps = {
    variant?: ContainerVariant;
    v?: ContainerVariant;
    children?: ReactNode;
} & ContainerProps;
declare const Container: React.ForwardRefExoticComponent<{
    variant?: "normal" | "fluid" | undefined;
    v?: "normal" | "fluid" | undefined;
    children?: React.ReactNode;
} & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & {
    _hover?: BoxBaseProps | undefined;
    _active?: BoxBaseProps | undefined;
    _focus?: BoxBaseProps | undefined;
    _before?: PseudoBoxBaseProps | undefined;
    _after?: PseudoBoxBaseProps | undefined;
    _disabled?: BoxBaseProps | undefined;
    _groupHover?: BoxBaseProps | undefined;
    _groupHoverIcon?: IconBaseProps | undefined;
    _placeholder?: BoxBaseProps | undefined;
    _selection?: SelectionBaseProps | undefined;
    _focusWithin?: BoxBaseProps | undefined;
    _first?: BoxBaseProps | undefined;
    _firstOfType?: BoxBaseProps | undefined;
    _last?: BoxBaseProps | undefined;
    _group?: {
        _hover?: BoxBaseProps | undefined;
        _focus?: BoxBaseProps | undefined;
        _active?: BoxBaseProps | undefined;
    } | undefined;
    _icon?: IconBaseProps | undefined;
    color?: string | undefined;
    cursor?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    animation?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transition?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    outline?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    outlineOffset?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    transform?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    filter?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    placeSelf?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    userSelect?: string | (string | null)[] | {
        [x: string]: string | undefined;
        [x: number]: string | undefined;
    } | null | undefined;
    pointerEvents?: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | ("fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | null)[] | {
        [x: string]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
        [x: number]: "fill" | "all" | "stroke" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "painted" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | undefined;
    } | null | undefined;
    column?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    row?: string | number | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    theme?: XcoreTheme | undefined;
} & import("styled-system").TypographyProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").BoxShadowProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol>, "backgroundColor" | "opacity" | "bg"> & Pick<import("styled-system").LayoutProps<Required<import("styled-system").Theme<React.ReactText>>>, "display" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflowX" | "overflowY" | "verticalAlign" | "width" | "overflow"> & import("styled-system").PositionProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<React.ReactText>>, string | number | symbol> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<React.ReactText>>, React.ReactText> & import("styled-system").GridColumnProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").GridRowProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").ZIndexProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").JustifySelfProps<Required<import("styled-system").Theme<React.ReactText>>> & import("styled-system").AlignSelfProps<Required<import("styled-system").Theme<React.ReactText>>> & Pick<React.DOMAttributes<HTMLElement>, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLDivElement>>;
type ListItemProps = FlexBaseProps & TextBaseProps & SideComplementProps;
declare const ListItem: FC<ListItemProps>;
interface ModalContext {
    push: (modal: ComponentType) => unknown;
    replace: (modal: ComponentType) => unknown;
    pop: () => unknown;
    go: (n: number) => unknown;
    back: () => unknown;
    forward: () => unknown;
}
declare const ModalContext: import("react").Context<ModalContext>;
declare const useModal: (modal?: import("react").ComponentClass<{}, any> | import("react").FunctionComponent<{}> | null | undefined) => [() => unknown];
declare const useModalHistory: () => ModalContext;
declare const ModalProvider: FC;
type TextAliasProps = Omit<TextProps, "t" | "type">;
declare const Em: FC<TextAliasProps>;
declare const Strong: FC<TextAliasProps>;
declare const Underline: FC<TextAliasProps>;
declare const Abbr: FC<TextAliasProps>;
declare const Strikethrough: FC<TextAliasProps>;
declare const Sub: FC<TextAliasProps>;
declare const Sup: FC<TextAliasProps>;
type TypograhyAliasProps = Omit<ExtendedTypographyProps, "t" | "type">;
declare const Heading1: FC<TypograhyAliasProps>;
declare const Heading2: FC<TypograhyAliasProps>;
declare const Heading3: FC<TypograhyAliasProps>;
declare const Heading4: FC<TypograhyAliasProps>;
declare const Heading5: FC<TypograhyAliasProps>;
declare const Heading6: FC<TypograhyAliasProps>;
declare const Paragraph: FC<TypograhyAliasProps>;
declare const Lead: FC<TypograhyAliasProps>;
type XcoreProviderProps = {
    theme?: XcoreTheme | null;
    disableGlobalStyles?: boolean;
};
declare const XcoreProvider: FC<XcoreProviderProps>;
declare const XcoreGlobal: FC;
declare const useTheme: () => XcoreTheme;
declare const useDisclosure: (initialState?: boolean) => {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export { ActiveBreakpoint, AspectRatio, AspectRatioProps, Box, BoxProps, Collapse, CollapseProps, Flex, FlexProps, ExtendedFlexProps, Icon, IconProps, ExtendedIconProps, Img, ImgProps, LoremIpsum, LoremIpsumProps, SimpleGrid, SimpleGridProps, Spinner, SpinnerProps, Stack, StackProps, ExtendedStackProps, Grid, GridProps, ExtendedGridProps, Cell, CellProps, ExtendedCellProps, InsetBox, InsetBoxProps, OutsetBox, OutsetBoxProps, HorizontalPosition, VerticalPosition, Button, ButtonProps, ExtendedButtonProps, button, ButtonSize, ButtonVariant, ButtonAs, Card, CardProps, ExtendedCardProps, card, CardVariant, CloseControl, CloseControlProps, ExtendedCloseControlProps, closeControl, CloseControlSizes, Container, ContainerProps, ExtendedContainerProps, container, Link, LinkProps, ExtendedLinkProps, link, LinkVariant, LinkAs, List, ListProps, ExtendedListProps, ListItem, ListItemProps, list, ListVariant, Modal, ModalProps, ExtendedModalProps, ModalContext, useModal, useModalHistory, ModalProvider, modal, Tag, TagProps, tag, TagVariant, Text, TextProps, ExtendedTextProps, text, TextAs, TextVariant, Em, Strong, Underline, Abbr, Strikethrough, Sub, Sup, Typography, TypographyProps, ExtendedTypographyProps, typography, TypographyVariant, TypographyAs, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Paragraph, Lead, XcoreProvider, XcoreProviderProps, XcoreGlobal, global, XcoreTheme, createTheme, Scales, createScales, breakpoints, BreakpointScale, colors, ColorScale, darken, lighten, opacify, transparentize, saturate, desaturate, shade, tint, adjustHue, lightColorTheme, darkColorTheme, fonts, FontScale, useTheme, useDisclosure };
//# sourceMappingURL=index.es.d.ts.map