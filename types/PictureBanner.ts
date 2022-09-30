export interface PictureBanner{
    /**
     * 图片链接地址
     */
    imgsrc:string;
    /**
     * 图片的跳转链接
     */
    href?:string;
    /**
     * 图片说明，在鼠标移过后显示
     */
    describe?:string;
    /**
     * Banner是否打开
     */
    open:boolean;
}