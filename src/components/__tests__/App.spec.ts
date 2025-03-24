import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Exercise from '@/components/Exercise.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(Exercise)
    expect(wrapper.text()).toContain('Simple Tasks Manager')
  })
})
