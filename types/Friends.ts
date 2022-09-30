/**
 * 友情列表项目接口
 */
export interface FriendsListItem {
  /**
   * 友情单位名称
   */
  name: string;
  /**
   * 友情单位描述，用于鼠标移过时显示
   */
  describe?: string;
  /**
   * 友情链接
   */
  url?: string;
}

