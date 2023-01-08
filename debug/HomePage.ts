import { HomePageServerProps } from "../pages";

export const HomePageDebugData: HomePageServerProps = {
  booksShowBoxData: Array(5).fill({
    img_url:
      "https://www.zzkpnews.com/d/file/p/2022/04-11/02d4aeb6554fc5c349d543d4f95b599f.jpg",
    title: "《河南科技报》2022年3月29日《中原围棋》专版",
    citation:
      "河南省围棋协会第二届第四次常务理事会议在郑州召开。中国围棋协会原副主席黄进先、河南省发改委体制改革处副处长严静波、河南省社会组织管理局副局长张新志、河南省围棋协会主席马望、协会常务理事和媒体等出席会议。会议由协会秘书长汪见虹九段主持。",
    href: "/book/example",
  }),
  topPictureBoxData: {
    href: "http://www.baidu.com",
    img_url:
      "https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/assets/common/imgs/china-20-entry-banner/banner_pc.png",
  },
  leftTopPictureBoxData: {
    href: "https://www.baidu.com",
    img_url:
      "https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/s3fs-public/styles/article_large_full/public/2022-10/2022-10-05t043447z_921512572_rc2xqs933lto_rtrmadp_3_taiwan-economy-chips_0.jpg?2778123",
  },
  leftBottomPictureBoxData: {
    href: "https://www.baidu.com",
    img_url:
      "https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/s3fs-public/styles/article_large_crop/public/2022-10/ZB_1030_CJ_doc7ncuxlsoltk11saozcrd_29183017_chngmj.jpg?2778524",
  },
  headlineData: {
    href: "https://www.baidu.com",
    lead_title: "习近平在开幕仪式上发表重要讲话",
    title: "中国共产党第二十次全国代表大会今日开幕",
  },
  specialNewsBoxData: {
    title: "中国年轻人心中的“鹤岗神话”",
    subtitle: "正在重塑中国年轻人的生活状态",
    citation:
      "近期鹤岗因为低房价再次登上各大中国热搜榜单，也瞬间成为许多中国年轻人心中的“桃花源”。25岁的女生为了逃离大城市，花了1万5000元（人民币，下同，2920新元）在鹤岗全款买了一套46平米的房子，从此过上了幸福的生活……",
    img_url:
      "https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/s3fs-public/styles/article_large_crop/public/2022-10/main_2.jpg?2778417",
    href: "https://www.baidu.com",
  },
  hotListBoxData: [
    {
      title: "韩媒：韩国首尔踩踏事故已致153人遇难",
      href: "https://www.baidu.com",
    },
    {
      title: "河北检察机关依法对于鲁明涉嫌受贿案提起公诉",
      href: "https://www.baidu.com",
    },
    {
      title: "见证中国发展变化 搭建交流沟通桥梁",
      href: "https://www.baidu.com",
    },
    {
      title: "山东临沂：邮递员七年帮20多位烈士“回家”",
      subtitle: "今朝英雄归故里，王德建怀着对革命先烈们的敬意默默温暖人世间。",
      href: "https://www.baidu.com",
    },
    {
      title: "前三季度农业农村经济稳中向好 稳中有进 何以实现？",
      href: "https://www.baidu.com",
    },
    { title: "充电桩进小区不应卡在“物业关”", href: "https://www.baidu.com" },
  ],
};

export const HomePageDebugApi = {
  loadMoreNewsList: (offset: string) => {},
};
