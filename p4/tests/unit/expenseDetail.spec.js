import { expect } from 'chai'
import { shallowMount, RouterLinkStub  } from '@vue/test-utils'
import ExpenseDetail from '@/components/ExpenseDetail.vue'


describe('ExpenseDetail.vue', () => {
  it('displays the correct expense detail', () => {

    let expense = {
        "id": "e0001",
        "type": "",
        "description": "Shopping at the Mall",
        "amount": "570",
        "date": "10-NOV-2019",
        "paidBy": "p1",
        "split": "yes",
        "splitters": [
          {
            "pid": "p1",
            "splitType": "percent",
            "split": "40"
          },
          {
            "pid": "p2",
            "splitType": "percent",
            "split": "30"
          },
          {
            "pid": "p3",
            "splitType": "percent",
            "split": "30"
          }
        ]
      }

    const wrapper = shallowMount(ExpenseDetail, {
        propsData: { expense },
        stubs: {
            RouterLink: RouterLinkStub
        }

    })
    expect(wrapper.text()).to.include(expense.description);
  })
})