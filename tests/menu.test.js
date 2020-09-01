import Menu from '../components/Menu'
import { shallowMount } from '@vue/test-utils'

test('Menu tests', () => {

  const wrapper = shallowMount(Menu)
  console.log(wrapper);
})