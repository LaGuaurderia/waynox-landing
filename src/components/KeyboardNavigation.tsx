import React, { useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface KeyboardShortcut {
  key: string
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
  action: () => void
  description: string
}

interface KeyboardNavigationProps {
  shortcuts?: KeyboardShortcut[]
  enableDefault?: boolean
}

export const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({
  shortcuts = [],
  enableDefault = true
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Atajos por defecto
  const defaultShortcuts: KeyboardShortcut[] = [
    {
      key: 'h',
      action: () => navigate('/'),
      description: 'Ir a Inicio'
    },
    {
      key: 's',
      action: () => navigate('/tarifas'),
      description: 'Ir a Tarifas'
    },
    {
      key: 'p',
      action: () => navigate('/proyectos'),
      description: 'Ir a Proyectos'
    },
    {
      key: 'c',
      action: () => navigate('/contacto'),
      description: 'Ir a Contacto'
    },
    {
      key: 'b',
      action: () => navigate('/blog'),
      description: 'Ir a Blog'
    },
    {
      key: 'n',
      action: () => navigate('/nosotros'),
      description: 'Ir a Nosotros'
    },
    {
      key: 'Escape',
      action: () => {
        // Cerrar modales o menús abiertos
        const modals = document.querySelectorAll('[role="dialog"]')
        modals.forEach(modal => {
          if (modal instanceof HTMLElement && modal.style.display !== 'none') {
            modal.style.display = 'none'
          }
        })
      },
      description: 'Cerrar modales'
    },
    {
      key: '?',
      action: () => {
        // Mostrar ayuda de atajos
        showKeyboardShortcuts()
      },
      description: 'Mostrar ayuda'
    }
  ]

  const allShortcuts = enableDefault ? [...defaultShortcuts, ...shortcuts] : shortcuts

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Ignorar si estamos en un input o textarea
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement ||
      event.target instanceof HTMLSelectElement
    ) {
      return
    }

    const pressedKey = event.key.toLowerCase()
    const ctrl = event.ctrlKey
    const shift = event.shiftKey
    const alt = event.altKey

    // Buscar atajo que coincida
    const shortcut = allShortcuts.find(s => {
      const keyMatch = s.key.toLowerCase() === pressedKey
      const ctrlMatch = s.ctrl === undefined ? !ctrl : s.ctrl === ctrl
      const shiftMatch = s.shift === undefined ? !shift : s.shift === shift
      const altMatch = s.alt === undefined ? !alt : s.alt === alt

      return keyMatch && ctrlMatch && shiftMatch && altMatch
    })

    if (shortcut) {
      event.preventDefault()
      shortcut.action()
      
      // Mostrar notificación visual
      showShortcutNotification(shortcut.description)
    }
  }, [allShortcuts])

  const showShortcutNotification = (description: string) => {
    // Crear notificación temporal
    const notification = document.createElement('div')
    notification.className = 'keyboard-shortcut-notification'
    notification.textContent = description
    
    Object.assign(notification.style, {
      position: 'fixed',
      top: '100px',
      right: '20px',
      background: 'rgba(0,191,255,0.9)',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      zIndex: '9999',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    })

    document.body.appendChild(notification)

    // Animar entrada
    setTimeout(() => {
      notification.style.transform = 'translateX(0)'
    }, 10)

    // Remover después de 2 segundos
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)'
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 300)
    }, 2000)
  }

  const showKeyboardShortcuts = () => {
    const modal = document.createElement('div')
    modal.className = 'keyboard-shortcuts-modal'
    
    const shortcutsList = allShortcuts.map(s => {
      const keyCombo = [
        s.ctrl && 'Ctrl',
        s.shift && 'Shift',
        s.alt && 'Alt',
        s.key
      ].filter(Boolean).join(' + ')
      
      return `<div class="shortcut-item">
        <kbd class="key">${keyCombo}</kbd>
        <span class="description">${s.description}</span>
      </div>`
    }).join('')

    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>Atajos de Teclado</h3>
          <button class="close-btn" onclick="this.closest('.keyboard-shortcuts-modal').remove()">×</button>
        </div>
        <div class="shortcuts-list">
          ${shortcutsList}
        </div>
        <div class="modal-footer">
          <p>Presiona <kbd>Esc</kbd> para cerrar</p>
        </div>
      </div>
    `

    Object.assign(modal.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '10000'
    })

    const content = modal.querySelector('.modal-content') as HTMLElement
    Object.assign(content.style, {
      background: '#111',
      color: 'white',
      padding: '24px',
      borderRadius: '12px',
      maxWidth: '500px',
      width: '90%',
      maxHeight: '80vh',
      overflow: 'auto'
    })

    // Agregar estilos para los elementos internos
    const style = document.createElement('style')
    style.textContent = `
      .keyboard-shortcuts-modal .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 16px;
        border-bottom: 1px solid #333;
      }
      .keyboard-shortcuts-modal .close-btn {
        background: none;
        border: none;
        color: #ccc;
        font-size: 24px;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
        transition: all 0.2s;
      }
      .keyboard-shortcuts-modal .close-btn:hover {
        background: #333;
        color: white;
      }
      .keyboard-shortcuts-modal .shortcuts-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .keyboard-shortcuts-modal .shortcut-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        background: #222;
        border-radius: 8px;
      }
      .keyboard-shortcuts-modal .key {
        background: #333;
        padding: 4px 8px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 12px;
        color: #00BFFF;
      }
      .keyboard-shortcuts-modal .modal-footer {
        margin-top: 20px;
        padding-top: 16px;
        border-top: 1px solid #333;
        text-align: center;
        color: #ccc;
      }
    `

    document.head.appendChild(style)
    document.body.appendChild(modal)

    // Cerrar con Escape
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        modal.remove()
        document.removeEventListener('keydown', handleEscape)
      }
    }
    document.addEventListener('keydown', handleEscape)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Componente invisible - solo maneja eventos
  return null
}

export default KeyboardNavigation
