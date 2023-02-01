import React, { Component } from 'react'

import './style.scss'
import { ReactComponent as Hamburger } from './hamburger.svg'

const prefix = 'dnd-sorting'

class DndSorting extends Component {
  state = {
    items: ['🍰 Cake', '🍩 Donut', '🍎 Apple', '🍕 Pizza'],
  }

  componentWillMount() {
    const root = document.documentElement
    root.style.setProperty('--bg-color', 'rgb(220, 208, 233)')
  }

  onDragStart = (evt, index) => {
    this.draggedItem = this.state.items[index]
    evt.dataTransfer.effectAllowed = 'move'
    evt.dataTransfer.setData('text/html', evt.target.parentNode)
    evt.dataTransfer.setDragImage(evt.target.parentNode, 20, 20)
  }

  onDragOver = (index) => {
    const draggedOverItem = this.state.items[index]
    if (this.draggedItem === draggedOverItem) {
      return
    }

    let items = this.state.items.filter((item) => item !== this.draggedItem)

    items.splice(index, 0, this.draggedItem)

    this.setState({ items })
  }

  onDragEnd = () => {
    this.draggedItem = null
  }

  render() {
    const { items } = this.state
    return (
      <div className={`${prefix}__wrapper`}>
        <div className={`${prefix}__content`}>
          <h3>List of items</h3>
          <ul className={`${prefix}__list`}>
            {items.map((item, index) => (
              <li
                key={item}
                className={`${prefix}__item`}
                onDragOver={() => this.onDragOver(index)}
              >
                <div
                  className={`${prefix}__handler`}
                  draggable
                  onDragStart={(evt) => this.onDragStart(evt, index)}
                  onDragEnd={this.onDragEnd}
                >
                  <Hamburger className={`${prefix}__svg`} />
                </div>
                <span className={`${prefix}__content`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DndSorting
