import Mock from 'mockjs'

const List = []
const TableList = []
const count = 20

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    order_no: '@guid()',
    timestamp: +Mock.Random.date('T'),
    username: '@name()',
    price: '@float(1000, 15000, 0, 2)',
    'status|1': ['success', 'pending'],
  }))
}

for (let i = 0; i < count; i++) {
  TableList.push(Mock.mock({
    order_no: '@guid()',
    title: '@title()',
    author: '@name()',
    'pageviews|0-100': 100,
    'status|1': ['success', 'pending'],
    display_time: '@date()',
  }))
}

export default {
  getList: () => {
    return {
      total: List.length,
      items: List,
    }
  },
  getTableList: () => {
    return {
      total: TableList.length,
      items: TableList,
    }
  },
}
