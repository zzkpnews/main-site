export interface WebsiteInfo {
  /**
   * 网站的标题，常用于首页中
   */
  title: string;

  /**
   * 网站名称，常用于首页LOGO中
   */
  name:string;
  /**
   * 网站的描述，常用于首页SEO中
   */
  describe:string;
  /**
   * 网站的ICP备案号
   */
  icp: string;
  /**
   * 网站的拥有组织或者公司
   */
  owner: string;
  /**
   * 网站技术支持方
   */
  poweredBy: string;
  /**
   * 网站运营方联系邮箱
   */
  email: string;
  /**
   * 网站运营方联系微信号
   */
  wechat: string;
  /**
   * 网站运营方电话号码
   */
  phone: string[];
  /**
   * 网站运营方联系地址
   */
  address: string;
}
