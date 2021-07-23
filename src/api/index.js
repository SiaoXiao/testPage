import request from '@/api/request'; // 引入封裝好的axios

// 推薦連結
export function apiPostRecommend(token) {
  return request({
    method: 'post',
    url: 'Consultant/Recommend',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}
// 登錄
export function apiPostLogin(data) {
  return request({
    method: 'post',
    url: 'Consultant/Login',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export function apiPostRefreshToken(data) {
  return request({
    method: 'post',
    url: 'Consultant/RefreshToken',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// 註冊
export function apiPostAddConsultant(data) {
  return request({
    method: 'post',
    url: 'Consultant/AddConsultant',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

// 取得 LINE 網址
export function apiPostLineLoginUrl() {
  return request({
    method: 'post',
    url: 'Consultant/GetLineLoginUrl',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// LINE 登入
export function apiPostLineLogin(data) {
  return request({
    method: 'post',
    url: 'Consultant/LineLogin',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// 忘記密碼
export function myPassword(data) {
  return request({
    method: 'post',
    url: 'Consultant/MyPassword',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// 顧問資訊
export function apiPostConsultantInfo(token) {
  return request({
    method: 'post',
    url: 'Consultant/Info',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 登出
export function apiPostLogout(token) {
  return request({
    method: 'post',
    url: 'Consultant/Logout',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問系統-Line綁定流程

// 取得Line 綁定網址
export function apiPostGetLineLoginUrlBindLine() {
  return request({
    method: 'post',
    url: 'Consultant/GetLineLoginUrlBindLine',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// 顧問系統-客戶流程

// 台灣各行政區資料
export function apiPostGetTaiwanAreaInfo(token) {
  return request({
    method: 'post',
    url: 'Consultant/GetTaiwanAreaInfo',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 新增客戶
export function apiPostAddCustomer(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/AddCustomer',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 修改客戶
export function apiPostModifyCustomer(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/ModifyCustomer',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 查詢客戶
export function apiPostGetCustomer(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetCustomer',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 客戶列表
export function apiPostListCustomer(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/ListCustomer',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問系統-行程流程

// 新增行程
export function apiPostAddMySchedule(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/AddMySchedule',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 修改行程
export function apiPostModifyMySchedule(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/ModifyMySchedule',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 行程列表整頁行事曆
export function apiPostGetSchedule(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetSchedule',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 查詢行程內容
export function apiPostGetMySchedule(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetMySchedule',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問系統-合約流程

// 新增合約
export function apiPostAddUserReport(data, token) {
  return request({
    method: 'post',
    url: 'UserContract/AddUserReport',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 查詢我的合約
export function apiPostGetMyReport(data, token) {
  return request({
    method: 'post',
    url: 'UserContract/GetMyReport',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 修改合約
export function apiPostAlterContract(data, token) {
  return request({
    method: 'post',
    url: 'UserContract/AlterContract',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 簽名約存簽名檔
export function apiPostSingatureMyReportasync(data, token) {
  return request({
    method: 'post',
    url: 'UserContract/SingatureMyReportasync',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問系統-獎金流程

// 獎金明細表
export function apiPostGetBonusDetailList(token) {
  return request({
    method: 'post',
    url: 'Consultant/GetBonusDetailList',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問提領
export function apiPostAddConsultWithdraw(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/AddConsultWithdraw',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問提領
export function apiPostGetBonusDetailFilterList(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetBonusDetailFilterList',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問提領單紀錄列表
export function apiPostGetConsultWithdrawList(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetConsultWithdrawList',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問系統-服務業面流程

// 聯繫客服
export function apiPostAddCustomerService(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/AddCustomerService',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 客服紀錄
export function apiPostConsultantLogServices(page, token) {
  return request({
    method: 'post',
    url: 'Consultant/LogServices',
    data: page,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 單筆客服紀錄
export function apiPostGetServiceLog(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetServiceLog',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 客服對話
export function apiPostServiceTalk(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/ServiceTalk',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 查詢公告列表
export function apiPostGetNewsContextList(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetNewsContextList',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 查詢公告列表
export function apiPostGetNewsContext(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetNewsContext',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問系統-個人資料頁面流程

// 個人資料
export function apiPostPersonalInfo(token) {
  return request({
    method: 'post',
    url: 'Consultant/ConfigPersonalInfo',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 修改個人資料
export function apiPostSavePersonalInfo(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/SavePersonalInfo',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 修改密碼
export function apiPostSaveMyPassword(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/SaveMyPassword',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 顧問銀行資料
export function apiPostGetConsultantBalance(token) {
  return request({
    method: 'post',
    url: 'Consultant/GetConsultantBalance',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 各家銀行資料
export function apiPostGetBankInfo(token) {
  return request({
    method: 'post',
    url: 'Consultant/GetBankInfo',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 取分行資料
export function apiPostGetBankInfoBranchCode(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/GetBankInfoBranchCode',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 新增銀行顧問資料
export function apiPostAddConsultantBalance(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/AddConsultantBalance',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 更新銀行顧問資料
export function apiPostUpdateConsultantBalance(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/UpdateConsultantBalance',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 我的團隊合作顧問群
export function apiPostMyTeam(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/MyTeam',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 查詢設置語系
export function apiPostConfigLanguage(token) {
  return request({
    method: 'post',
    url: 'Consultant/ConfigLanguage',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}

// 設置語系存檔
export function apiPostSaveLanguage(data, token) {
  return request({
    method: 'post',
    url: 'Consultant/SaveLanguage',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
}
