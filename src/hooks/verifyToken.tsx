import { verify } from '@/api/auth'
import { getCookie } from '@/util'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'



type authType = 'PENDING' | 'SUCCESS' | 'FAILED'

function verifyToken() {
  const [isAuthenticated, setIsAuthenticated] = useState<authType>('PENDING')
  const verifyResult = useQuery(['auth', 'verify'], verify, {
    onSuccess: () => {
      setIsAuthenticated('SUCCESS')
    },
    onError: () => {
      setIsAuthenticated('FAILED')
    },
    retry: 0, 
    enabled: !!getCookie('accessToken'), 
  }) 

  return isAuthenticated 
}

export default verifyToken