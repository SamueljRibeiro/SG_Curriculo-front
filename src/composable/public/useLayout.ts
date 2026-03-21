import { computed } from 'vue';
import { useQuasar } from 'quasar';

export function useLayout() {
  const $q = useQuasar();

  const layout = computed(() => {
    const isDesktop = $q.screen.gt.md;

    const isMobile = $q.screen.lt.md;

    return {
      isMobile,
      isDesktop,

      deskMenu: isDesktop,
      mobileMenu: isMobile,
      sectiGridCol: isMobile ? 'grid-cols-1' : 'grid-cols-2',
      gap: isMobile ? 'gap-4' : 'gap-44',
      sectiPadding: isMobile ? 'px-4' : 'px-16',
      MenuMargin: isMobile ? 'mb-4' : 'mb-0',
    };
  });
  return { layout };
}


export function useLayoutVagas() {
  const $q = useQuasar();

  const layout = computed(() => {
    const isDesktop = $q.screen.gt.md;

    const isMobile = $q.screen.lt.md;

    return {
      isMobile,
      isDesktop,

      sectiGridCol: isMobile ? 'grid-cols-1' : isDesktop ? 'grid-cols-4' : 'grid-cols-2',

    };
  });
  return { layout };
}
